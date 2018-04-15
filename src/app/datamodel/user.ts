export class User {
    private id: number;
    private name: string;
    private mobile: string;
    private email: string;
    private bg: string;

    constructor(id: number, name: string, mobile: string, email: string, bg: string) {
        this.id = id;
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.bg = bg;
    }


    public static getUserList(): User[] {
        const userList: User[] = [];

        const user1 = new User(1, 'KHG', '123456789', 'khg@gmail.com', 'bg-info');
        userList.push(user1);

        const user2 = new User(1, 'KHG', '123456789', 'khg@gmail.com', 'bg-warning');
        userList.push(user2);

        const user3 = new User(1, 'KHG', '123456789', 'khg@gmail.com', 'bg-primary');
        userList.push(user3);

        const user4 = new User(1, 'KHG', '123456789', 'khg@gmail.com', 'bg-success');
        userList.push(user4);

        return userList;
    }

}
