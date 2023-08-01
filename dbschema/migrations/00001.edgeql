CREATE MIGRATION m1pwqhaiv7dqynnac3lrcfzjpic6opfo2tm6gfmlavgnddmalxk6ta
    ONTO initial
{
  CREATE TYPE default::Todo {
      CREATE PROPERTY completed: std::bool;
      CREATE REQUIRED PROPERTY title: std::str;
  };
  CREATE TYPE default::Account {
      CREATE MULTI LINK todos: default::Todo;
      CREATE REQUIRED PROPERTY name: std::str;
  };
};
