CREATE TABLE "tasks" (
"id" SERIAL,
"task" VARCHAR (50),
"description" VARCHAR (300),
"urgency" VARCHAR (6),
"complete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "tasks" ("task", "description", "urgency", "complete")
VALUES
('Grocery shop', 'get eggs and bacon', 'High', 'false'),
('Laundry', 'dark load', 'Medium', 'false'),
('Clean', 'kitchen and bathroom', 'Low', 'false');

