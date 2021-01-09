## chạy lệnh : npm i -g @angular/cli 
# SỬ DỤNG MARKDOWN note.md

chạy lệnh : ng new ten-project (chữ thường hoặc chữ thường với dấu gạch ngang)

-> có cần sử dụng Angular Routing hay không ?  Yes hoặc No
-> chọn SCSS

chạy cd ten-project : di chuyển các cấp trong thư mục

ng serve : khởi chạy angular (npm start)

cài đặt thư viện dưới devDependencies :
- npm node-sass --save-dev  ->thư viện cài vào sẽ nằm trong devDependencies


    "baseUrl": "./", -> src / app / A / Folder A1 (ko cần "../../A/A1")


Import css và js của thư viện khác vào file : angular.json
mục script : []

_------ TẠO COMPONENT trong app :

-> chuột phải app cọn terminal : gõ ' ng g component ten-component' hoac ' ng g c header'
-> tạo component ngay cùng cấp với module (ko phải là 1 folder) : dùng để làm component đại diện cho 1 module : gõ 'ng g c baitap2 --flat'


----- TẠO MODULE trong app :
-> chuột phải app cọn terminal : gõ ' ng g module baitap1 hoặc bai-tap1, không viết baitap-1

Cài đặt thư viên bootstrap // Jquery // PopperJS trong node-modules :
npm i bootstrap  jquery popper.js
-> vào angular.js để nhúng style css và script vào

