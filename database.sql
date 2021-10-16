CREATE TABLE "tasks" (
"id" SERIAL,
"urgency" VARCHAR (6),
"task" VARCHAR (50),
"description" VARCHAR (300),
"complete" BOOLEAN
);

INSERT INTO "tasks" ("task", "urgency", "description", "complete")
VALUES
('Grocery shop', 'High', 'get eggs and bacon', 'false'),
('Laundry', 'Medium', 'dark load', 'false'),
('Clean', 'Low', 'kitchen and bathroom', 'false');

