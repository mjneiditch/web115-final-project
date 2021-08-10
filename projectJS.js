/*
    Name: Matthew Neiditch
    Course: WEB115.4172
    Instructor: Mrs. Roslyn Samuels
    Date: 11/28/19
    Purpose: WEB 115 Final Project: Creating an interactive resume
*/


/*
 *   Creates and returns </h#> element with text.
*/
function createHeadingElement(txt, hSize = "h2"){
    var h = document.createElement(hSize);
    h.setAttribute("style", "margin-top: 50px;");
    h.appendChild(document.createTextNode(txt));
    return h;
}


/*
 *   Creates and returns a label element with text.
*/
function createLabel(name, txtName, newLine = false, paddingTop = "20px", width = "135px"){
    var txt = document.createElement("label");
    txt.setAttribute("for", name);
    if (!newLine){
        txt.setAttribute("style", "display: inline-block; width: " + width + "; text-align: right; padding-right: 5px; padding-top: " + paddingTop + ";");
    }else{
        txt.setAttribute("style", "display: block; padding-top: " + paddingTop + ";");
    }
    txt.appendChild(document.createTextNode(txtName));
    return txt;
}


/*
 *   Creates and returns a customized text input element.
*/
function createTextbox(name, placeholder, size = 40, maxSize = 80){
    var txtBox = document.createElement("input");
    txtBox.setAttribute("type", "text");
    txtBox.setAttribute("name", name);
    txtBox.setAttribute("id", name);
    txtBox.setAttribute("size", size);
    txtBox.setAttribute("maxlength", maxSize);
    txtBox.setAttribute("placeholder", placeholder);
    txtBox.setAttribute("required", "");
    return txtBox;
}


/*
 *   Creates and returns a customized textarea input element.
*/
function createTextArea(name, placeholder){
    var txtArea = document.createElement("textarea");
    txtArea.setAttribute("name", name);
    txtArea.setAttribute("id", name);
    txtArea.setAttribute("cols", "65");
    txtArea.setAttribute("rows", "10");
    txtArea.setAttribute("style", "resize: vertical; min-height: 100px;");
    txtArea.setAttribute("placeholder", placeholder);
    return txtArea;
}


var isValid = false; // tests input validation
var rWindow;         // window containing the resume

var body = document.body;
body.setAttribute("style", "text-shadow: 1px 1px 1px #e4e4e4;");
body.innerHTML = "<header style='color: red; text-align: center'>"
    +"<h1 style='font-family: Tahoma;'>Matthew Neiditch</h1>"
    +"<h2 style='font-family: Garamond; font-style: italic;'>WEB 115 - Section 4172</h2>"
    +"</header>"
    +"<hr width='60%'>"
    +"<h1 style='text-align: center'>Build Your Resume</h1>";

var content = document.createElement("div");
content.setAttribute("style", "margin: auto; width: 680px; background-color: #f2f2f2; padding-left: 30px;  border-style: double;");

// form
var myForm = document.createElement("form");
myForm.setAttribute("name", "myForm");

myForm.appendChild(createHeadingElement("Basic Information"));
var paragraph = document.createElement("p");
paragraph.setAttribute("id", "p1");

// text full name
paragraph.appendChild(createLabel("iName", "Name: ", false, "0px"));
var iName = createTextbox("iName", "Enter your Full name (required)");
paragraph.appendChild(iName);
paragraph.appendChild(document.createElement("br"));

// text address
paragraph.appendChild(createLabel("iAddress", "Address: ", false, paddingTop = "10px"));
var iAddress = createTextbox("iAddress", "Enter your address (required)", 60);
paragraph.appendChild(iAddress);
paragraph.appendChild(document.createElement("br"));

// text phone number
paragraph.appendChild(createLabel("iPhoneNumber", "Phone Number: ", false, paddingTop = "10px"));
var iPhoneNumber = createTextbox("iPhoneNumber", "Enter your phone number (required)");
paragraph.appendChild(iPhoneNumber);
paragraph.appendChild(document.createElement("br"));

// text e-mail address
paragraph.appendChild(createLabel("iEmail", "Email: ", false, paddingTop = "10px"));
var iEmail = createTextbox("iEmail", "Enter your e-mail address (required)");
paragraph.appendChild(iEmail);
paragraph.appendChild(document.createElement("br"));
myForm.appendChild(paragraph);

// textarea "Enter your personal information"
paragraph = document.createElement("p");
paragraph.setAttribute("id", "p2");
paragraph.setAttribute("style", "padding-left: 20px");
paragraph.appendChild(createLabel("iPersonalInfo", "Personal Information: ", true));
var iPersonalInfo = createTextArea("iPersonalInfo", "Enter your personal information (required)");
paragraph.appendChild(iPersonalInfo);
paragraph.appendChild(document.createElement("br"));

// textarea "Enter your career objectives"
paragraph.appendChild(createLabel("iCareerObj", "Career Objectives: ", true));
var iCareerObj = createTextArea("iCareerObj", "Enter your career objectives (required)");
paragraph.appendChild(iCareerObj);
paragraph.appendChild(document.createElement("br"));

// textarea "Enter your educational background"
paragraph.appendChild(createLabel("iEducation", "Educational Background: ", true));
var iEducation = createTextArea("iEducation", "Enter your educational background (required)");
paragraph.appendChild(iEducation);
paragraph.appendChild(document.createElement("br"));
myForm.appendChild(paragraph);


/*
 *  Creates an start date input, end date input, and textarea employment experience input
 *  then appends the inputs to the given parent object.
*/
function createEmploymentInput(name, pObject){
    var expParagraph = document.createElement("p");
    expParagraph.setAttribute("id", name + "p");
    expParagraph.setAttribute("style", "padding-left: 20px");
    
    // date start date of employment
    var fullName = name + "startDate"
    var label = document.createElement("label");
    label.setAttribute("for", fullName);
    label.appendChild(document.createTextNode("Enter start of employment: "));
    expParagraph.appendChild(label);
    var startDate = document.createElement("input");
    startDate.setAttribute("type", "date");
    startDate.setAttribute("name", fullName);
    startDate.setAttribute("id", fullName);
    expParagraph.appendChild(startDate);
    expParagraph.appendChild(document.createElement("br"));
    
    // date end date of employment
    fullName = name + "endDate"
    label = document.createElement("label");
    label.setAttribute("for", fullName);
    label.appendChild(document.createTextNode("Enter end of employment: "));
    expParagraph.appendChild(label);
    var endDate = document.createElement("input");
    endDate.setAttribute("type", "date");
    endDate.setAttribute("name", fullName);
    endDate.setAttribute("id", fullName);
    expParagraph.appendChild(endDate);
    expParagraph.appendChild(document.createElement("br"));
    
    // textarea employee experience
    fullName = name + "experience"
    var experience = createTextArea(fullName, "Enter your employment experience");
    expParagraph.appendChild(experience);
    
    pObject.appendChild(expParagraph);
}


// employment history
myForm.appendChild(createHeadingElement("Employment History"));
myForm.appendChild(document.createTextNode("Employment History #1"));
createEmploymentInput("iempExp1", myForm);
myForm.appendChild(document.createTextNode("Employment History #2"));
createEmploymentInput("iempExp2", myForm);
myForm.appendChild(document.createTextNode("Employment History #3"));
createEmploymentInput("iempExp3", myForm);

// textarea character references
myForm.appendChild(createHeadingElement("References"));
paragraph = document.createElement("p");
paragraph.setAttribute("id", "p3");
paragraph.setAttribute("style", "padding-left: 20px");
paragraph.appendChild(createLabel("iCharacterRef", "Character References: ", true, "0px", "0px"));
var iCharacterRef = createTextArea("iCharacterRef", "Enter your character references\n(defaults to \"Upon request\" if left blank)");
paragraph.appendChild(iCharacterRef);

// textarea business references
paragraph.appendChild(createLabel("iBusinessRef", "Business References: ", true));
var iBusinessRef = createTextArea("iBusinessRef", "Enter your business references\n(defaults to \"Upon request\" if left blank)");
paragraph.appendChild(iBusinessRef);
myForm.appendChild(paragraph);

// button "Create Resume"
paragraph = document.createElement("p");
paragraph.setAttribute("id", "p5");
var iSubmit = document.createElement("input");
iSubmit.setAttribute("type", "button");
iSubmit.setAttribute("name", "iSubmit");
iSubmit.setAttribute("style", "padding: 8px");
iSubmit.setAttribute("value", "Create Resume");
paragraph.appendChild(iSubmit);

// error message
var errorMsg = document.createElement("label");
errorMsg.setAttribute("style", "font-family: Garamond; font-size: 16px; color: red; margin-left: 12px;");
errorMsg.innerHTML = "&nbsp;";
paragraph.appendChild(errorMsg);
myForm.appendChild(paragraph);

content.appendChild(myForm);
body.appendChild(content);


/*
 * Checks if an input is empty.
*/
function checkInputNotEmpty(obj){
    if (obj.value != ""){
        obj.removeAttribute("style");
    }
}


/*
 * Validates an input, checking if it contains a value.
*/
function validateInputNotEmpty(obj){
    if (obj.value != ""){
        obj.removeAttribute("style");
    }else{
        isValid = false;
        obj.setAttribute("style", "background-color: antiquewhite");
    }
}


/*
 * Validates phone number.
*/
function validatePhoneNumber(){
    if (/^[\d\(\)\s-\.]+$/.test(iPhoneNumber.value)){
        iPhoneNumber.removeAttribute("style");
    }else{
        isValid = false;
        iPhoneNumber.setAttribute("style", "background-color: antiquewhite");
    }
}


/*
 * Validates email address.
*/
function validateEmail(){
    if (/^(.+@(.+\.)+[a-z]{2,4})$/.test(iEmail.value)){
        iEmail.removeAttribute("style");
    }else{
        isValid = false;
        iEmail.setAttribute("style", "background-color: antiquewhite");
    }
}


/*
 * Validates date entries
*/
function validateDates(){
    for (var i=1; i<=3; i++){
        var startDate = document.getElementById("iempExp" + i + "startDate");
        var endDate = document.getElementById("iempExp" + i + "endDate");
        var experience = document.getElementById("iempExp" + i + "experience");
        
        if (experience.value || endDate.value){
            if (startDate.value != ""){
                startDate.removeAttribute("style");
            }else{
                isValid = false;
                startDate.setAttribute("style", "background-color: antiquewhite");
            }
        }
    }
}


/*
 *  Validates all resume inputs. Informs the user if invalid inputs exist.
*/
function validateResume(){
    isValid = true;
    validateInputNotEmpty(iName);
    validateInputNotEmpty(iAddress);
    validatePhoneNumber();
    validateEmail();
    validateInputNotEmpty(iPersonalInfo);
    validateInputNotEmpty(iCareerObj);
    validateInputNotEmpty(iEducation);
    validateDates();
    
    if (isValid){
        errorMsg.innerHTML = "&nbsp;";
    }else{
        errorMsg.innerHTML = "Please fix all highlighted inputs to proceed";
    } 
}


/*
 *  Creates a resume in a new window if validation checks are sucessful.
*/
function submitResume(){
    validateResume();
    if (!isValid){
        return;
    }
    
    // generate the resume
    if (rWindow){
        // close existing resume
        rWindow.close();
    }
    rWindow = window.open('about:blank','resumeWindow','width=800,height=800,left=550,top=100');
    var rBody = rWindow.document.body;
    rBody.setAttribute("style", "background-color: floralwhite; font-family: Courier; font-size: 16px");
    var rContent = document.createElement("div");
    rContent.setAttribute("style", "margin: auto; padding: 40px;");
    rContent.appendChild(document.createTextNode(iName.value.toUpperCase()));
    rContent.appendChild(document.createElement("br"));
    rContent.appendChild(document.createTextNode(iEmail.value));
    rContent.appendChild(document.createElement("br"));
    rContent.appendChild(document.createTextNode(iAddress.value + " / " + iPhoneNumber.value));
    rContent.appendChild(document.createElement("hr"));
    
    
    /*
     * Appends a subject and a value to the resume in a two-column layout.
    */
    function appendDatapoint(subject, value, leftWidth="25%"){
        var leftDiv = document.createElement("div");
        leftDiv.setAttribute("style", "clear: both; float:left; width: " + leftWidth + ";");
        leftDiv.appendChild(document.createTextNode(subject));
        rContent.appendChild(leftDiv);
        
        var rightDiv = document.createElement("div");
        rightDiv.setAttribute("style", "width: 55%; float:right; padding-bottom: 35px; padding-right: 0px;");
        rightDiv.appendChild(document.createTextNode(value));
        rContent.appendChild(rightDiv);
    }
    
    appendDatapoint("CAREER OBJECTIVES", iCareerObj.value);
    appendDatapoint("PERSONAL DATA", iPersonalInfo.value);
    appendDatapoint("EDUCATION", iEducation.value);
    if (myForm.iempExp1experience.value != ""
       || myForm.iempExp2experience.value != ""
       || myForm.iempExp3experience.value != ""){
        appendDatapoint("EMPLOYMENT EXPERIENCE", "\u00A0");
        
        
        /*
         * Returns a formatted string representing a date range
         */
        function getDateRange(startDate, endDate){
            var fdate;
            var abbrMonths = [null, "Jan.", "Feb.", "March", "April", "May", "June",
                              "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
            var s = startDate.toString().split("-"); // year, month, day
            var e = endDate.toString().split("-"); // year, month, day
            if (e == ""){
                fdate = abbrMonths[parseInt(s[1])] + " " + s[0] + " - Present";
            }else if (s[0] == e[0]){
                if (s[1] == e[1] && s[2] == e[2]){
                    fdate = abbrMonths[parseInt(s[1])] + " " + s[2] + ", " + s[0];
                }else{
                    fdate = abbrMonths[parseInt(s[1])] + " - " + abbrMonths[parseInt(e[1])] + " " + s[0];
                }
            }else{
                fdate = abbrMonths[parseInt(s[1])] + " " + s[0] + " - " + abbrMonths[parseInt(e[1])] + " " + e[0];
            }
            
            return fdate;
        }
        
        if (myForm.iempExp1experience.value){
            appendDatapoint(getDateRange(myForm.iempExp1startDate.value, myForm.iempExp1endDate.value), myForm.iempExp1experience.value, "40%");
        }
        if (myForm.iempExp2experience.value){
            appendDatapoint(getDateRange(myForm.iempExp2startDate.value, myForm.iempExp2endDate.value), myForm.iempExp2experience.value, "40%");
        }
        if (myForm.iempExp3experience.value){
            appendDatapoint(getDateRange(myForm.iempExp3startDate.value, myForm.iempExp3endDate.value), myForm.iempExp3experience.value, "40%");
        }
        
    }
    
    appendDatapoint("CHARACTER REFERENCES", (iCharacterRef.value == "" ? "Upon request" : iCharacterRef.value));
    appendDatapoint("BUSINESS REFERENCES", (iBusinessRef.value == "" ? "Upon request" : iBusinessRef.value));
    
    var footerDiv = document.createElement("div");
    footerDiv.setAttribute("style", "clear: both; padding-top: 70px;");
    
    rPrintButton = document.createElement("input");
    rPrintButton.setAttribute("type", "button");
    rPrintButton.setAttribute("value", "Print Resume");
    rPrintButton.setAttribute("style", "padding: 8px; visibility: visible;");
    footerDiv.appendChild(rPrintButton);
    
    var rExitButton = document.createElement("input");
    rExitButton.setAttribute("type", "button");
    rExitButton.setAttribute("value", "Close Window");
    rExitButton.setAttribute("style", "padding: 8px; margin-left: 10px; visibility: visible;");
    footerDiv.appendChild(rExitButton);
    rContent.appendChild(footerDiv);
    
    rBody.appendChild(rContent);
    
    // resume event listeners
    rPrintButton.addEventListener("click", function(){
        rPrintButton.setAttribute("style", "visibility: hidden");
        rExitButton.setAttribute("style", "visibility: hidden");
        rWindow.print();
        rPrintButton.setAttribute("style", "padding: 8px; visibility: visible;");
        rExitButton.setAttribute("style", "padding: 8px; margin-left: 10px; visibility: visible;");
    });
    rExitButton.addEventListener("click", function(){rWindow.close()});
}


// event listeners
iName.addEventListener("blur", function(){checkInputNotEmpty(this);});
iAddress.addEventListener("blur", function(){checkInputNotEmpty(this);});
iPersonalInfo.addEventListener("blur", function(){checkInputNotEmpty(this);});
iCareerObj.addEventListener("blur", function(){checkInputNotEmpty(this);});
iEducation.addEventListener("blur", function(){checkInputNotEmpty(this);});
iPhoneNumber.addEventListener("blur", function(){
    if (iPhoneNumber.value != ""){validatePhoneNumber();}
});
iEmail.addEventListener("blur", function(){
    if (iEmail.value != ""){validateEmail();}
});
myForm.iempExp1startDate.addEventListener("blur", validateDates);
myForm.iempExp1endDate.addEventListener("blur", validateDates);
myForm.iempExp1experience.addEventListener("blur", validateDates);
myForm.iempExp2startDate.addEventListener("blur", validateDates);
myForm.iempExp2endDate.addEventListener("blur", validateDates);
myForm.iempExp2experience.addEventListener("blur", validateDates);
myForm.iempExp3startDate.addEventListener("blur", validateDates);
myForm.iempExp3endDate.addEventListener("blur", validateDates);
myForm.iempExp3experience.addEventListener("blur", validateDates);
iSubmit.addEventListener("click", submitResume);
