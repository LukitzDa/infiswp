Aufgabe 3 Big Countries:

SELECT Name, Population, Area
FROM World
WHERE Area >= 3000000OR Population >= 25000000;


Aufgabe 4 Invalid Tweets:

SELECT Tweet_ID
FROM Tweets
WHERE Length(Content) > 15;