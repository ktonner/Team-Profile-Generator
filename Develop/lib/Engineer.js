// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee{
    constructor(name, id, email, github, githubUser){
    super(name, id, email)
    this.github = github;
    this.githubUser = githubUser
    }
    getGithub = function(){
        return this.githubUser
        return this.github
    }
    getRole = function(){
        return "Engineer"
    }
}



// * github  // GitHub username

// * getGithub()

// * getRole() // Overridden to return 'Engineer'