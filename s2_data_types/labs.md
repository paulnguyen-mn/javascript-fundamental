## Labs: Number + String

### Number 

0. Viết hàm tính tổng các chữ số của số có 3 chứ số.
1. Xếp loại học sinh.
- Giỏi: 9-10
- Khá: 7-8
- Trung bình: 5-7 
- Yếu: dưới 5

Viết hàm nhận vào điểm và trả về kết quả là xếp loại học sinh.


2. Viết hàm tính diện tích hình tròn.
3. Viết hàm tính diện tích hình chữ nhật.


4. Viết hàm so sánh 2 số a và b 
- Nếu a > b, trả về 1
- Nếu a = b, trả về 0
- Nếu a < b thì trả về -1

5. Tính tiền taxi khi biết:

- 1km đầu giá 15000
- 2 -> 5km giá 13500
- 6 trở lên giá 11000

Nếu hơn 120km thì đc giảm 10%.

6. Đổi tiền ATM, giả sử đang có 10 tờ 500k, 5 tờ 200k, 10 tờ 100k và 100 tờ 50k.
Viết hàm nhận vào số tiền, trả về object với định dạng như sau: 

```
{
  _500: a,
  _200: b,
  _100: c,
  _50: d,
}
```

Trong đó a, b, c, d lần lượt là số lượng tờ tiền tương ứng đổi được. 
Lưu ý: ưu tiền đổi tiền lớn trước, khi hết tiền lớn mới dùng tiền nhỏ.


### String

1. Viết hàm viết hoa ký tự đầu của một chuỗi.
2. Viết hàm kiểm tra xem chuỗi có chứa chữ `hack` hay không?
3. Viết hàm thực hiện việc biến đổi sau: `Code JS IS FUN` --> `code-js-is-fun`
4. Viết hàm truncate(text, maxLength)
- Trong đó, nếu text có độ dài nhỏ hơn maxLength thì trả về text.
- Nếu text có độ dài lớn hơn maxLength thì cắt chuỗi text tới maxLength + 3 dấu chấm.
Ví dụ: truncate('abcdef', 3) --> 'abc...'
5. Viết hàm nhận vào số từ 1 -> 12, trả về tên tháng tương ứng trong Tiếng Anh. Ví dụ printMonth(1) --> `January`
6. Viết hàm chuẩn hoá chuỗi 
  - Remove khoảng trắng thừa ở đầu và cuối chuỗi 
  - Remove khoảng trắng thừa ở giữa 2 từ, ví dụ giữa 2 từ có 2 khoảng trắng trở lên thì remove hết chỉ để lại một khoảng trắng.
