class Student {
    /*
     * メンバ修飾子はpublicとprivateのみ
     * 明示的に付けない場合はpublic扱いになる
     */
    public fullName: string;
    schoolName: string;
    private problem_list: Array<string>;
    static age: number;
    /*
     * constructor引数でpublic指定した引数はコンストラクタメンバ変数として展開される
     * つまり、以下では、firstName, middleName, lastNameがコンストラクタメンバとして
     * 展開されている
     */
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string) {
        if (middleName) {
            this.fullName = firstName + " " + middleName + " " + lastName;
        } else {
            this.fullName = firstName + " " + lastName;
        }
        this.problem_list = [];
        this.schoolName = "";
    }
    public enter_school(schoolName: string) {
        this.schoolName = schoolName;
    }
    public set_age(age: number) {
        Student.age = age;
    }
    public cause_problem(problem_description: string) {
        this.problem_list.push(problem_description);
    }
    public show_problem() {
        console.log("==================================")
        console.log("Problems caused by " + this.fullName);
        console.group()
        for (const v of this.problem_list) {
            console.log(v);
        }
        console.groupEnd();
        console.log("==================================")
    }
    public tablize_problem(): string {
        var tbl = "<table>"
            + "<caption>" + "Problems caused by " + this.fullName + "</caption>"
            + "<tbody>"
            +   "<tr><th>description</th></tr>";
        for (const v of this.problem_list) {
            tbl += "<tr><td>" + v + "</td></tr>";
        }
        tbl += "</tbody></table>";
        return tbl;
    }
}

/* StudentクラスにはfirstNameとlastNameのメンバが存在するのでinterfaceに適合する */
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello" + person.firstName + " " + person.lastName;
}

let user = new Student("Jame", "M.", "User");

document.body.innerHTML = greeter(user);

user.set_age(16);
user.enter_school("High School of Dead");
user.cause_problem("Make noise while the inter test");
user.show_problem();

document.body.innerHTML += user.tablize_problem();