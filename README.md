# Hackney Playbus Admin Console

This project host the hackney playbus admin console

Compile with 

tsc -p src/ -w

ng serve does not work. No idea why. Frontend dev is total shit.



## Datastore Structure
```
Hierarchy
Family
 |
  -> child
      |
       -> visit
      |
       -> referral
 |
  -> carer
      |
       -> vist
      |
       -> referral
 |
  -> notes

```

project is the funding

locations can have many projects
project can have many siblings