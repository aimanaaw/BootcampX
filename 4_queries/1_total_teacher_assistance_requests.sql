SELECT count(assistance_requests.*) as total_assistances, name
FROM teachers
JOIN assistance_requests on teachers.id = assistance_requests.teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;