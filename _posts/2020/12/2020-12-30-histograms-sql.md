---
layout: post
title: Histograms in SQL
---

A **histogram** is an approximate representation of the distribution of numerical data. In other words, histograms show the number of data points that fall within a specified range of values (typically called "bins" or "buckets"). In this post, I'm exploring options for querying data as histogram by using SQL.

## Sample Data

Note that for the sake of simplicity, I'll be using MySQL as a database, but the queries are quite generic and can be used in other SQL dialects.

Let's assume we have a table for persisting `orders` of `users`. Our goal is to build a histogram for understanding distribution of orders among many users. The table is kept to minimum for the simplicity.

```
CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,  
  PRIMARY KEY (`id`),
  KEY `IDX_user_auth_token_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

INSERT INTO `orders` (user_id)
VALUES 
    (1), (1), 
    (2), (2), (2), 
    (3), (3), (3), (3),
    (4), (4), (4), (4), (4), (4), (4);
```

After inserting some orders, we have the following data:

```
User with ID 1 has 2 orders
User with ID 2 has 3 orders
User with ID 3 has 4 orders
User with ID 4 has 7 orders
```

Querying the table should produce the following result:
    
```
SELECT id, user_id
FROM `orders`;

Result:
| id  | user_id |
| --- | ------- |
| 1   | 1       |
| 2   | 1       |
| 3   | 2       |
| 4   | 2       |
| 5   | 2       |
| 6   | 3       |
| 7   | 3       |
| 8   | 3       |
| 9   | 3       |
| 10  | 4       |
| 11  | 4       |
| 12  | 4       |
| 13  | 4       |
| 14  | 4       |
| 15  | 4       |
| 16  | 4       |
```

## Building a Histogram

Choosing bucket sizes is a [science](https://www.statisticshowto.com/choose-bin-sizes-statistics){:target="_blank"} by its own and depends on the objective and data distribution. We can keep things simple here and choose 3 as a bucket size. The buckets would be `o-3`, `3-6`, `6-9` and so on. 

### Lower and upper bounds

Now that we identified our buckets, the question is if we want to make the bucket bounds inclusive or exclusive. I'd say it again depends on the given task we want to accomplish. Typically, for clarity you would want to make the upper bound exclusive and lower bound inclusive. 

### SQL Query

First, let's see how many orders each user has

```
SELECT 
	COUNT(1) as count, 
    user_id 
FROM orders 
GROUP BY user_id;

Result:
| count | user_id |
| ----- | ------- |
| 2     | 1       |
| 3     | 2       |
| 4     | 3       |
| 7     | 4       |

```

This is already good, the only thing we need to do is to distribute the data points to our predefined value ranges (buckets)

```
SELECT 
    FLOOR(ordercount/3.00)*3 AS bucket,
    COUNT(*)                 AS count
FROM   (SELECT COUNT(1) AS ordercount FROM orders GROUP BY user_id) o
GROUP  BY bucket;

| bucket | count |
| ------ | ----- |
| 0      | 1     |
| 3      | 2     |
| 6      | 1     |

```

Here we go, we have our first version of histogram. The query above floors each data point to the nearest multiple of 3 and then groups by that value. This is the trick to create the buckets we needed. It is worth to mention that if there is no data point for a specific bucket, that row will be skipped from the results.

#### Inclusive upper bounds

It might be needed to actually have the upper bound inclusive. Rounding up instead of down in the above query will do it! So changing `FLOOR` to `CEIL` is sufficient.

```
SELECT 
    CEIL(ordercount/3.00)*3 AS bucket,
    COUNT(*)                AS count
FROM   (SELECT COUNT(1) AS ordercount FROM orders GROUP BY user_id) uat
GROUP  BY bucket;

Result:
| bucket | count |
| ------ | ----- |
| 3      | 2     |
| 6      | 1     |
| 9      | 1     |
```
### Cumulative Histogram

In [Cumulative Histogram](https://en.wikipedia.org/wiki/Histogram#Cumulative_histogram){:target="_blank"} the cumulative number of observations is counted in all of the buckets up to the specified bucket. Let's see what would be difference in our example.

```
| bucket | count |
| ------ | ----- |
| 3      | 2     |
| 6      | 3     |
| 9      | 6     |
```

In this scenario, we can't use the rounding strategy anymore, however we can scan over the result of grouping and count the cumulative value. In order to do this, we would also need to predefine the buckets in advance in our query.


```
SELECT
    COUNT(CASE WHEN ordercount <= 3 THEN 1 END) AS bucket_le_3,
    COUNT(CASE WHEN ordercount <= 6 THEN 1 END) AS bucket_le_6,
    COUNT(CASE WHEN ordercount <= 9 THEN 1 END) AS bucket_le_9,
    COUNT(1) AS bucket_le_inf
FROM (SELECT COUNT(1) AS ordercount FROM orders GROUP BY user_id) o;

| bucket_le_3 | bucket_le_6 | bucket_le_9 | bucket_le_inf |
| ----------- | ----------- | ----------- | ------------- |
| 2           | 3           | 4           | 4             |
```

As you can see we also introduced a new bucket, `bucket_le_inf`. This is required unless you know in advance the limit of the buckets you want to plot and it will contain the cumulative result of all previous buckets.

## Wrap-up

Histograms are not easy to get right and all of the above is only a good enough solution. Feel free to play around with examples and [fiddle](https://www.db-fiddle.com){:target="_blank"} with it.

