everything is in oop folder

bonus.ts

ฟังก์ชันรับโบนัส และ return ฟังก์ชันออกไป โดยฟังก์ชันจะ return grade + bonus

apply โดยการ ใส่ student และ bonus ที่จะได้
จากนั้น อัพเดดเกรด ที่สร้างโดยฟังก์ชัน map 

arr.ts

filter ทำการกรองนักเรียนที่อยู่ใน array โดยการตรวจสอบเกรดด้วย getAverageGrade หากมากกว่า 75 ก็จะเก็บเข้าไปในฟังก์ชัน

map ทำการ loop ทุก element ใน array โดยการเลือกมาเฉพาะชื่อ

reduce total ค่าเริ่ม = 0 จากนั้น จำนวนนำ element ใน grades ของแต่ละ student มา += ลงไปใน total

tc.ts ทำการรับ string ที่เขียนในรูปแบบ json และ นำไปแทนค่า parameter ของ student รูปแบบ string ไม่สามารถ
นำไปสร้าง student object ก็จะ error หากทำได้จะ return object ที่ถูกสร้างขึ้น



index.html jquery

เขียนฟังก์ชัน รองรับการ submit จาก form
โดยตรวจสอบ หาก Input มีข้อมูลอยู่จะทำการ เพิ่ม html tag <li>{ข้อมูลที่ถูกกรอก}</li> ลงไปใน innerhtml ของ tag id #studentList
และ ขึ้นหน้าต่าง alert เพื่อแจ้งเตือน
