interface Admin{
    name: string;
    department: string;
}

const getAdminInfo = (admin: Admin) => {
    console.log(admin.name , admin.department);
}