let marks;

marks  = window.prompt("enter marks")

if(marks > 90)
{
document.write("<h1>your grade is A+</h1>")
}
else if(marks > 75)
{
 document.write("<h1>your grade is A</h1>")
}
else if(marks > 65)
{
 document.write("<h1>your grade is B</h1>")
}
else if(marks > 55)
{
 document.write("<h1>your grade is C</h1>")
}
else if(marks > 45)
{
 document.write("<h1>your grade is D</h1>")
}
else{
 document.write("<h1>you are failed</h1>")
}