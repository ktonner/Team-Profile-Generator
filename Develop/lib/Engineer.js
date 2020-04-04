// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, githubUser){
    super(name, id, email)
    
    this.github = githubUser
    this.githubLink = "github.com/" + this.githubUser
    this.getGithub = function(){
        return this.github
    }
    this.getRole = function(){
        return "Engineer"
    }
    }
}

module.exports = Engineer