//Advantising
let std = 0, cour = 0, teach = 0;
function advertising() {
    let students = document.getElementById('students'),
        courses = document.getElementById('courses'),
        teachers = document.getElementById('teachers');
    
    
    //display
    students.textContent = std;
    courses.textContent = cour;
    teachers.textContent = teach;


    // checking values
    std = (std > 1990) ? 1990 : std;
    cour = (cour > 15) ? 14 : cour;
    teach = (teach > 22) ? 21 : teach;

    //incrementing
    std+=10, cour+=10, teach+=10;

    setInterval(advertising, 500)
}

advertising()

//Select
let selectedCourses = document.getElementById('selected-courses'),
    courses = document.getElementsByClassName('course'),
    title = document.getElementsByClassName('title'),
    options = document.getElementsByTagName('option');

selectedCourses.addEventListener('keyup', find);

function find() {
    for (let course of courses) {
        course.style.display = 'none'
        
        let title = course.querySelector('h2').innerHTML.toUpperCase(),
            description = course.querySelector('.description').innerHTML.toUpperCase(),
            input = selectedCourses.value.toUpperCase();
        if (input) {
            if (title.indexOf(input) > -1 || description.indexOf(input) > -1) {
                course.style.display = '';
            }
            else if (input == 'ALL') {
                course.style.display = '';
            }
            
        }
        else {
            course.style.display = '';
        }
    }
}
    



