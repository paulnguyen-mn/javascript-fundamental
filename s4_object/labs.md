# Labs: Arrays + Object

## Arrays 

Cho danh sách học sinh như sau:

```js
const studentList = [
  {
    id: 1058,
    isActive: true,
    age: 29,
    firstName: "Winifred",
    lastName: "Carter",
    math: 10,
    english: 6,
    favoriteFruit: "banana"
  },
  {
    id: 2775,
    isActive: false,
    age: 24,
    firstName: "Glenn",
    lastName: "Larson",
    math: 9,
    english: 10,
    favoriteFruit: "apple"
  },
  {
    id: 3072,
    isActive: true,
    age: 28,
    firstName: "Marcy",
    lastName: "Bowman",
    math: 10,
    english: 8,
    favoriteFruit: "banana"
  },
  {
    id: 7626,
    isActive: false,
    age: 22,
    firstName: "Golden",
    lastName: "Wilson",
    math: 4,
    english: 4,
    favoriteFruit: "apple"
  },
  {
    id: 9337,
    isActive: true,
    age: 22,
    firstName: "Blevins",
    lastName: "Travis",
    math: 3,
    english: 6,
    favoriteFruit: "strawberry"
  },
  {
    id: 6218,
    isActive: true,
    age: 27,
    firstName: "Harrell",
    lastName: "Day",
    math: 4,
    english: 6,
    favoriteFruit: "apple"
  }
]
```

Thực hiện các yêu cầu dưới đây: 

1. Viết hàm `findStudent(studentId)` tìm một học sinh bằng id. Nêu tìm thấy thì trả về thông tin của học sinh tìm thấy, nêu không thì trả về `null`.
2. Viết hàm `filterActiveStudentList(studentList)` để lọc ra những học sinh có `isActive=true`
3. Viết hàm `sortStudentListByName(studentList)` trả về danh sách học sinh đã được sắp xếp theo firstName và lastName.
4. Viết hàm xếp loại học sinh `gradingStudentList(studentList)` trả về một mảng học sinh mới, trong đó mỗi học sinh có thêm một thuộc tính mới là `grading_scale=A, B, C hoặc D` tuỳ vào điểm trung bình của 2 môn Toán và Tiếng Anh:
  - Nêu dtb >= 9: A 
  - Nếu 5 < dtb <= 8: B
  - Nếu 4 <= dtb <= 5: C 
  - Dưới 4 là D.
5. Viết hàm `sortStudentListByGradingScale(studentList)` để sắp xếp danh sách học sinh tăng dần theo điểm trung bình môn.
6. Viết hàm `filterStudentByFavoriteFruit(studentList, fruit)` để trả về danh sách học sinh thích loại `fruit` truyền vào.
7. Viết hàm tìm người có số tuổi lớn nhất `findTheOldest(studentList)`, nêu trùng tuổi thì trả về người đầu tiên trong danh sách.
8. Viết hàm tìm người nhỏ nhất trong lớp `findTheYoungest(studentList`, nếu trùng tuổi thì trả về người cuôi cùng trong danh sách.
9. Viết hàm tìm học sinh đạt 1 điểm 10 trong 2 môn để khen thưởng `findStudentGot10(studentList)`

----

## Objects - OOP

1. Làm bài tập này bằng Javascript: https://www.exercisescsharp.com/2013/04/601-classes-student-teacher.html
2. Làm bài The Cat, và The Reading List ở link này https://github.com/gSchool/JS-Intro-OOP-Exercises


> Refs
> - Link để generate JSON data: https://next.json-generator.com/


HAPPY CODING! <3
