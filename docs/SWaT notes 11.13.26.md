## SWaT notes 11.13.26

### Shell & Introduction 

Gathering a bunch of high performers into a community, brings up said high performers and those who wish to be higher performing. 
Coursework is not enough, so instead of theory and general skills. We focus on types of experiences for interview and job hunting (collaborative environments) (technical challenge) 

**Need to prove it buddy** with these real work experiences. For the holly grail of 4 years work experience. 

### Goals round 2

Progress is better with support and guidance. 
Long form team projects with deadlines and expectations
version control, code workflows 
"defended technical review" 
implementation matters as compared to hackathons. 

Project lifesystel 
pitch scope build defended review retrospective 



using the shell-practice github, we; 
searched our directory 
cloned a git repo 
created a file 
copied a file 
moved a file 
searched for words inside a file 
'''
➜  shell-practice git:(main) ✗ grep TODO practice/project.txt 
TODO: check that the output is easy to read from the back of the room.
➜  shell-practice git:(main) ✗ grep TODO practice/project.txt > report.txt 
➜  shell-practice git:(main) ✗ ls  
data       hints      practice   report.txt solutions  starter    tasks.md
➜  shell-practice git:(main) ✗ cat report.txt
TODO: check that the output is easy to read from the back of the room.
➜  shell-practice git:(main) ✗ mv report.txt practice/ 
➜  shell-practice git:(main) ✗ ls 
data      hints     practice  solutions starter   tasks.md
➜  shell-practice git:(main) ✗ ls practice 
project.txt report.txt
➜  shell-practice git:(main) ✗ cat report.txt 
cat: report.txt: No such file or directory
➜  shell-practice git:(main) ✗ cd practice
➜  practice git:(main) ✗ ls 
project.txt report.txt
➜  practice git:(main) ✗ cat report.txt
TODO: check that the output is easy to read from the back of the room.
➜  practice git:(main) ✗ 
'''

chained commands 
'''
 practice git:(main) ✗ grep TODO project.txt && echo "found TODOs"
TODO: check that the output is easy to read from the back of the room.
found TODOs
'''
created a branching if else command using .sh files 
created a for loop .sh file 
redirected different streams 

shebang 

utilizing the shell is a foundational skill of computer science. allowing students and skills people to communicate with the computer in a faster way, and as an introduction to OOP skills. 


