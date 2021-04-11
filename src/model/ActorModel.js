
class ActorModel{
    constructor(plainActor, lname, bday, img, imdb){
        if(typeof plainActor==='object'){
            this.fname = plainActor.fname;
            this.lname = plainActor.lname;
            this.bday = plainActor.bday;
            this.img = plainActor.img;
            this.imdb = plainActor.imdb;
        } else{
            this.fname = plainActor;
            this.lname = lname;
            this.bday = bday;
            this.img = img;
            this.imdb = imdb;
        }
        this.age = this.getAge(this.bday);
    }

    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}
export default ActorModel