drop view if exists get_users;
create or replace view get_users(id, first_name, last_name, age, gender, email, password) as
(
select c.person_id, p.first_name, p.last_name, p.age, p.gender, c.email, c.password
from customers c
         join persons p on c.person_id = p.id
    );
