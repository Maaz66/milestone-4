var _a;
(_a = document.getElementById('Resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    //prevent page reload
    //collect input value
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var Name = nameElement.value;
        var Email = emailElement.value;
        var Phone = phoneElement.value;
        var Education = educationElement.value;
        var Experience = experienceElement.value;
        var Skills = skillsElement.value;
        var resumeHTML = "\n      <h2>Editable Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(Name, "</span></p>\n    <p><b>email:</b><span contenteditable=\"true\">").concat(Email, "</span></p>\n    <p><b>phone:</b><span contenteditable=\"true\">").concat(Phone, "</span></p>\n\n    <h3 >Education</h3>\n    <pcontenteditable=\"true\">").concat(Education, "</p>\n\n    <h3>Experience</h3>\n    <pcontenteditable=\"true\">").concat(Experience, "</p>\n\n    <h3>skills</h3>\n    <pcontenteditable=\"true\">").concat(Skills, "</p>\n    ");
        // display the generate resume
        var resumeHTMLelement = document.getElementById('resume-display');
        if (resumeHTMLelement) {
            resumeHTMLelement.innerHTML = resumeHTML;
        }
        else {
            console.error('the resume out put element are missing');
        }
    }
    else {
        console.error('one or more put element are missing');
    }
});
