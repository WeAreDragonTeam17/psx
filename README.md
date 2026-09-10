````markdown
# PlayStation Pulse

<p align="center">
  <strong>Trung tâm máy chủ PS4 ưu tiên ngoại tuyến với các luồng khai thác lỗ hổng riêng theo từng phiên bản phần mềm hệ thống và tích hợp GoldHEN.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-PlayStation%204-111827?style=for-the-badge&logo=playstation&logoColor=white" alt="Nền tảng: PlayStation 4">
  <img src="https://img.shields.io/badge/firmware-5.05--11.02-16a34a?style=for-the-badge" alt="Phạm vi phần mềm hệ thống: 5.05 đến 11.02">
  <img src="https://img.shields.io/badge/mode-offline--first-0f766e?style=for-the-badge" alt="Ưu tiên ngoại tuyến">
  <img src="https://img.shields.io/badge/interface-terminal--style-334155?style=for-the-badge" alt="Giao diện kiểu dòng lệnh">
</p>

<!-- Thay phần giữ chỗ bên dưới bằng địa chỉ GitHub trực tiếp của tệp hình ảnh showcase.webp sau khi tải lên kho mã. -->
![Bộ chọn máy chủ PlayStation Pulse](https://raw.githubusercontent.com/sudoBlackArch/sudoblackarch.github.io/main/assets/showcase.webp)

PlayStation Pulse là một bộ sưu tập khép kín gồm các trang máy chủ PS4 tĩnh. Dự án cung cấp một điểm truy cập duy nhất để chọn phiên bản phần mềm hệ thống của máy, sau đó chuyển đến luồng khai thác lỗ hổng và GoldHEN tương ứng. Dự án được thiết kế để lưu trữ cục bộ, lưu bộ nhớ đệm ngoại tuyến và sử dụng trên trình duyệt PS4.

> Dự án này được dành cho mục đích giáo dục, bảo tồn và nghiên cứu. Bạn tự chịu mọi rủi ro khi sử dụng. Dự án không liên kết hoặc được Sony Interactive Entertainment chứng nhận.

<details>
<summary><strong>Nội dung</strong></summary>

- [Dự án này cung cấp những gì](#dự-án-này-cung-cấp-những-gì)
- [Các luồng phần mềm hệ thống được hỗ trợ](#các-luồng-phần-mềm-hệ-thống-được-hỗ-trợ)
- [Cách máy chủ hoạt động](#cách-máy-chủ-hoạt-động)
- [Các phiên bản GoldHEN](#các-phiên-bản-goldhen)
- [Các công cụ tải dữ liệu](#các-công-cụ-tải-dữ-liệu)
- [Bộ nhớ đệm ngoại tuyến](#bộ-nhớ-đệm-ngoại-tuyến)
- [Cách sử dụng máy chủ](#cách-sử-dụng-máy-chủ)
- [Thiết kế kỹ thuật](#thiết-kế-kỹ-thuật)
- [Khắc phục sự cố](#khắc-phục-sự-cố)
- [An toàn và giới hạn](#an-toàn-và-giới-hạn)
- [Ghi công và nguồn đóng góp](#ghi-công-và-nguồn-đóng-góp)

</details>

## Dự án này cung cấp những gì

- Bộ chọn phần mềm hệ thống gốc thống nhất tại [`index.html`](./index.html).
- Các trang máy chủ ngoại tuyến riêng dành cho PS4 phiên bản 5.05 và 6.72.
- Các luồng máy chủ PSFree/Lapse dành cho phiên bản phần mềm hệ thống 7.00–8.52 và 9.00–9.60.
- Luồng máy chủ CSSFontFace UAF dành cho phiên bản phần mềm hệ thống 6.00–11.02.
- Lựa chọn GoldHEN v2.4b18.10 và v2.4b18.5 tại những máy chủ hỗ trợ cả hai bản.
- Hoạt động ngoại tuyến dựa trên AppCache với bộ nhớ đệm và tệp kê khai riêng theo từng phiên bản phần mềm hệ thống.
- Các tiện ích tải dữ liệu riêng theo từng phiên bản phần mềm hệ thống trên những nhánh máy chủ có cung cấp.
- Hệ thống giao diện thống nhất theo phong cách dòng lệnh, không gian mạng và điện toán cổ điển trên các bộ chọn, trang bộ nhớ đệm và trang khai thác lỗ hổng.
- Bố cục thích ứng và trạng thái lấy nét thân thiện với bàn phím/tay cầm để điều hướng trình duyệt.

## Các luồng phần mềm hệ thống được hỗ trợ

| Phần mềm hệ thống | Điểm truy cập | Luồng khai thác lỗ hổng | Lựa chọn GoldHEN | Tiện ích tải dữ liệu |
|---|---|---|---|---|
| **5.05** | `505/index.html` | Máy chủ riêng theo từng phiên bản phần mềm hệ thống | Trực tiếp trên trang máy chủ | Có sẵn |
| **6.72** | `672/index.html` | Máy chủ riêng theo từng phiên bản phần mềm hệ thống | Trực tiếp trên trang máy chủ | Có sẵn |
| **7.00–8.52** | `700/version-selector.html` | Luồng máy chủ PSFree + Lapse | Bộ chọn phiên bản, sau đó đến trang bộ nhớ đệm ngoại tuyến | Có sẵn |
| **9.00–9.60** | `900/version-selector.html` | Luồng máy chủ PSFree + Lapse | Bộ chọn phiên bản, sau đó đến trang bộ nhớ đệm ngoại tuyến | Có sẵn |
| **6.00–11.02** | `css/version-selector.html` | CSSFontFace UAF + Lapse/NetCtrl | Bộ chọn phiên bản, sau đó đến máy chủ `stable` hoặc `latest` | Không có menu tiện ích tải dữ liệu riêng |

Bộ chọn gốc lưu phiên bản phần mềm hệ thống đã chọn vào bộ nhớ cục bộ và chuyển đến nhánh tương ứng. Luôn sử dụng máy chủ được thiết kế chính xác cho phiên bản phần mềm hệ thống đang cài trên máy.

## Cách máy chủ hoạt động

```mermaid
flowchart LR
    A[Mở index.html] --> B{Chọn phần mềm hệ thống}
    B --> C[Máy chủ 5.05]
    B --> D[Máy chủ 6.72]
    B --> E[Bộ chọn 7.00-8.52]
    B --> F[Bộ chọn 9.00-9.60]
    B --> G[Bộ chọn CSSFontFace]
    E --> H[Chọn GoldHEN và cài đặt AppCache]
    F --> I[Chọn GoldHEN và cài đặt AppCache]
    G --> J[Chọn bản ổn định hoặc mới nhất]
    C --> K[Chạy luồng khai thác lỗ hổng]
    D --> K
    H --> K
    I --> K
    J --> K
    K --> L[GoldHEN và các công cụ riêng của máy chủ]
````

Dự án được thiết kế hoàn toàn ở dạng tĩnh. Các trang HTML cung cấp giao diện người dùng, các mô-đun JavaScript chạy chuỗi khai thác lỗ hổng riêng theo từng phiên bản phần mềm hệ thống, các tệp nhị phân cung cấp dữ liệu GoldHEN/bản vá nhân/hệ thống tải dữ liệu, còn các tệp AppCache giữ cho luồng đã chọn vẫn có thể sử dụng sau khi cài đặt bộ nhớ đệm ban đầu.

## Các phiên bản GoldHEN

Kho mã chứa hai lựa chọn GoldHEN tại những nơi được hỗ trợ:

* **GoldHEN v2.4b18.10** — bản dựng mới nhất được các bộ chọn cung cấp.
* **GoldHEN v2.4b18.5** — bản dựng ổn định/bản dựng trước đó dành cho người dùng muốn sử dụng phiên bản cũ hơn.

Các nhánh 7.00–8.52 và 9.00–9.60 chọn bản dựng GoldHEN thông qua bộ chọn phiên bản và trang bộ nhớ đệm của chúng. Nhánh CSSFontFace sử dụng [`css/version-selector.html`](./css/version-selector.html), chuyển đến:

* [`css/latest/index.html`](./css/latest/index.html) dành cho v2.4b18.10;
* [`css/stable/index.html`](./css/stable/index.html) dành cho v2.4b18.5.

## Các công cụ tải dữ liệu

Khả năng cung cấp dữ liệu tải xuống phụ thuộc vào từng phiên bản phần mềm hệ thống.

### Các máy chủ có tiện ích tải dữ liệu

Tùy theo nhánh được chọn, các trang máy chủ cung cấp những công cụ như:

* Máy chủ FTP;
* PS4Debug;
* App2USB;
* Sao lưu và Khôi phục;
* Bật cập nhật và Tắt cập nhật;
* Cài đặt AppCache;
* Chặn lịch sử;
* Giải mã PUP;
* Đổi tên RIF;
* Sửa lỗi PSFree trên các nhánh PSFree;
* WebRTE trên các nhánh có tích hợp;
* Đồng hồ nhân trên máy chủ phần mềm hệ thống có cung cấp.

Danh sách chính xác sẽ khác nhau giữa 5.05, 6.72, 7.00–8.52 và 9.00–9.60. Các nút tải dữ liệu sẽ nạp tệp nhị phân đã chọn thông qua trình tải dữ liệu hiện có của máy chủ và có thể yêu cầu một bộ nhận dữ liệu tương thích trên cùng mạng.

### Phạm vi máy chủ CSSFontFace

Nhánh CSSFontFace chủ động loại bỏ menu tiện ích tải dữ liệu độc lập được sử dụng bởi các nhánh máy chủ khác. Bản chất của khai thác CSSFontFace tiêu tốn nhiều bộ nhớ, vì vậy việc loại bỏ các công cụ tải dữ liệu bổ sung giúp duy trì lượng bộ nhớ trống cần thiết để khai thác lỗ hổng và khởi chạy GoldHEN ổn định hơn. Giao diện tập trung vào:

* đầu ra khai thác lỗ hổng;
* lựa chọn chuỗi Lapse hoặc NetCtrl;
* đếm ngược Tự động bẻ khóa và kích hoạt `Jailbreak` thủ công;
* tự động tải bản dựng GoldHEN đã chọn.

Phần triển khai CSSFontFace vẫn chứa giai đoạn tệp nhị phân nội bộ cần thiết để hoàn tất luồng khai thác lỗ hổng/GoldHEN đã chọn. Giai đoạn nội bộ này không phải là tiện ích tải dữ liệu do người dùng lựa chọn và không tương đương với bộ tiện ích tải dữ liệu tùy chọn đã bị loại khỏi máy chủ này.

## Bộ nhớ đệm ngoại tuyến

Tất cả các nhánh máy chủ đều sử dụng tài nguyên tương đối và bộ nhớ đệm ứng dụng của trình duyệt. Các tệp bộ nhớ đệm phải được cung cấp từ đúng đường dẫn mà các trang truy cập yêu cầu; không đổi tên hoặc gom phẳng các thư mục phần mềm hệ thống sau khi triển khai.

| Nhánh           | Luồng bộ nhớ đệm                                                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **5.05**        | `505/cache.manifest` được gắn vào trang máy chủ và trang hiển thị tiến trình cài đặt.                                                                       |
| **6.72**        | `672/cache.manifest` được gắn vào trang máy chủ và trang hiển thị tiến trình cài đặt.                                                                       |
| **7.00–8.52**   | Chọn một bản dựng trong `700/version-selector.html`, sau đó sử dụng `cache.html` hoặc `cache5.html` để cài đặt `PSPulse.cache` hoặc `PSPulse5.cache`.       |
| **9.00–9.60**   | Chọn một bản dựng trong `900/version-selector.html`, sau đó sử dụng `cache.html` hoặc `cache5.html` để cài đặt `PSPulse.manifest` hoặc `PSPulse5.manifest`. |
| **CSSFontFace** | Chọn một bản dựng trong `css/version-selector.html`; trang `stable` hoặc `latest` được chọn sẽ sử dụng `cache.manifest` riêng.                              |

Sau lần cài đặt bộ nhớ đệm thành công đầu tiên, hãy đóng và mở lại trình duyệt PS4 khi trang yêu cầu. Nếu trang vẫn tải giao diện hoặc tập lệnh cũ, hãy xóa dữ liệu trình duyệt của máy chủ rồi thực hiện lại việc cài đặt bộ nhớ đệm.

Kho mã cũng bao gồm các tập lệnh tạo nhỏ để xây dựng lại các tệp bộ nhớ đệm sau khi thay đổi tài nguyên. Bất cứ khi nào một tệp được lưu trong bộ nhớ đệm thay đổi, hãy tạo lại tệp kê khai/bộ nhớ đệm tương ứng và kiểm tra để đảm bảo mọi đường dẫn tương đối được tham chiếu đều có thể truy cập từ máy chủ đã triển khai.

## Cách sử dụng máy chủ

1. Cung cấp thư mục gốc của kho mã thông qua máy chủ HTTP hoặc HTTPS tĩnh. Không nên mong đợi trình duyệt PS4 chạy toàn bộ luồng từ địa chỉ `file://` không được hỗ trợ.
2. Mở [`index.html`](./index.html) gốc trong trình duyệt PS4.
3. Chọn đúng phạm vi phiên bản phần mềm hệ thống tương ứng với máy.
4. Nếu nhánh đã chọn có bộ chọn phiên bản GoldHEN, hãy chọn **Mới nhất** hoặc **Ổn định** và chờ trang bộ nhớ đệm hoàn tất.
5. Trên trang máy chủ, chờ thông báo sẵn sàng/trạng thái trước khi bắt đầu khai thác lỗ hổng.
6. Sau khi GoldHEN được tải, chỉ sử dụng các công cụ được hiển thị bởi nhánh máy chủ đó.

Đối với máy chủ CSSFontFace, **Tự động bẻ khóa** được bật theo mặc định và bắt đầu đếm ngược năm giây. Trong thời gian đếm ngược, bạn có thể chọn `Lapse`, tắt Tự động bẻ khóa hoặc để luồng mặc định tiếp tục. Khi Tự động bẻ khóa bị tắt, hãy nhấn `Jailbreak` thủ công khi trang đã sẵn sàng.

Trang CSSFontFace lưu chuỗi đã chọn trong `localStorage` với khóa `exploitChain` và tùy chọn Tự động bẻ khóa với khóa `autoJb`. Bộ chọn gốc và các bộ chọn GoldHEN cũng lưu các giá trị đã chọn cục bộ để trình duyệt có thể giữ lại lựa chọn trước đó giữa các lần tải trang.

## Thiết kế kỹ thuật

### Bộ chọn gốc

Trang gốc là một danh sách chọn phần mềm hệ thống tùy chỉnh thay vì một tập hợp các liên kết riêng biệt. Trang hỗ trợ thao tác bằng con trỏ và điều hướng bằng bàn phím, cập nhật trạng thái tùy chọn đã chọn, lưu `selectedFirmware` và chuyển đến nhánh máy chủ tương ứng.

### Các nhánh PSFree/Lapse

Các nhánh 7.00–8.52 và 9.00–9.60 bao gồm:

* các mô-đun khai thác lỗ hổng PSFree riêng theo từng phiên bản phần mềm hệ thống;
* các mô-đun khai thác Lapse và hỗ trợ ROP riêng theo từng phiên bản phần mềm hệ thống;
* các bản vá nhân riêng theo từng phiên bản phần mềm hệ thống;
* các tệp nhị phân GoldHEN cho hai bản dựng được hỗ trợ;
* các trang bộ nhớ đệm dựa trên AppCache/tệp kê khai;
* các trình tải dữ liệu và tệp nhị phân tiện ích riêng của máy chủ.

Các nhánh 7.00–8.52 và 9.00–9.60 giữ các biến thể tài nguyên `latest` và `stable` riêng biệt để bản dựng GoldHEN đã chọn có thể được lưu trong bộ nhớ đệm độc lập.

### Nhánh CSSFontFace

Phần triển khai CSSFontFace bao gồm đường dẫn không gian người dùng CSSFontFace UAF, các công cụ hỗ trợ bộ nhớ dùng chung/đọc-ghi/ROP, các chuỗi khai thác Lapse và NetCtrl, hỗ trợ nhân PS4, các bản vá nhân riêng theo từng phiên bản phần mềm hệ thống và bộ ghi trạng thái theo phong cách dòng lệnh. Các thư mục `stable` và `latest` được bố trí song song có chủ đích để có thể được lưu trong bộ nhớ đệm và cung cấp độc lập.

Bảng điều khiển CSS được giữ nhỏ gọn và dễ dự đoán cho trình duyệt PS4: đầu ra khai thác lỗ hổng, lựa chọn chuỗi, Jailbreak và Tự động bẻ khóa. Kiểu hiển thị lấy nét của chuỗi lựa chọn sử dụng bộ chọn `:focus` được hỗ trợ rộng rãi để việc điều hướng bằng tay cầm vẫn được đánh dấu rõ ràng trên công cụ trình duyệt PS4 cũ.

### Bảo trì AppCache

AppCache là công nghệ trình duyệt cũ, nhưng nó là một phần trong mô hình cung cấp nội dung ngoại tuyến của máy chủ. Hãy xem các tệp bộ nhớ đệm là những tệp được tạo tự động: sau khi thay đổi một tài nguyên HTML, JavaScript, tệp nhị phân hoặc bản vá, hãy cập nhật danh sách/mã băm bộ nhớ đệm tương ứng và kiểm tra riêng đường dẫn tải lần đầu và đường dẫn tải từ bộ nhớ đệm.

## Khắc phục sự cố

### Trang sai hoặc phiên bản cũ đang được tải

Xóa dữ liệu trang web của trình duyệt PS4 đối với máy chủ, đóng và mở lại trình duyệt, sau đó bắt đầu từ bộ chọn gốc. Kiểm tra để đảm bảo tệp bộ nhớ đệm của nhánh đã chọn chứa các đường dẫn tài nguyên tương đối hiện tại.

### Bộ nhớ đệm không bao giờ hoàn tất

Đảm bảo kho mã được cung cấp qua HTTP/HTTPS, tệp kê khai có kiểu MIME/cấu hình chính xác trên máy chủ và mọi tệp được liệt kê đều có thể truy cập tại đúng đường dẫn tương đối. AppCache cũ có thể vẫn tồn tại sau khi làm mới thông thường; hãy xóa dữ liệu trang web trước khi thử lại.

### Khai thác lỗ hổng không hoàn tất

Kiểm tra phiên bản phần mềm hệ thống của máy và nhánh đã chọn, đóng các thẻ trình duyệt không liên quan và thử lại từ trạng thái trình duyệt sạch. Trên trang CSSFontFace, hãy thử tắt Tự động bẻ khóa rồi bắt đầu luồng thủ công bằng `Jailbreak`. Độ tin cậy của khai thác lỗ hổng có thể thay đổi tùy theo bộ nhớ trình duyệt, trạng thái bộ nhớ đệm và tình trạng của máy.

### Trình duyệt PS4 bị treo

JavaScript không thể khôi phục đáng tin cậy một tiến trình trình duyệt đã ngừng phản hồi. Đóng và mở lại trình duyệt PS4, sau đó tải lại máy chủ phù hợp. Tránh thêm các vòng lặp thử lại hoặc tải lại liên tục; chúng có thể làm tăng tình trạng mất ổn định.

### Tiện ích tải dữ liệu không phản hồi

Chờ cho đến khi máy chủ báo rằng luồng khai thác lỗ hổng/GoldHEN đã sẵn sàng. Xác nhận máy chủ đã chọn thực sự cung cấp tiện ích được yêu cầu, PS4 và bộ nhận dữ liệu đang ở đúng mạng dự kiến và bộ nhận đang lắng nghe trên cổng yêu cầu. Nhánh CSSFontFace không cung cấp các nút tiện ích tải dữ liệu độc lập.

## An toàn và giới hạn

* Chỉ sử dụng máy chủ được thiết kế cho đúng phiên bản phần mềm hệ thống của máy.
* Không ngắt máy trong khi khai thác lỗ hổng, tải GoldHEN, tải dữ liệu hoặc thực hiện thao tác hệ thống.
* Luôn có phương án khôi phục an toàn và bản sao lưu hiện tại trước khi sử dụng các tiện ích sao lưu, khôi phục hoặc liên quan đến hệ thống.
* Không sử dụng các trang khai thác lỗ hổng để truy cập PSN hoặc các dịch vụ trực tuyến khác.
* Không cho rằng một tiện ích là vô hại chỉ vì nó được tích hợp cục bộ; hãy xem xét chức năng của từng tiện ích trước khi tải.
* Luồng CSSFontFace đặc biệt nhạy cảm với lượng bộ nhớ trình duyệt khả dụng; việc loại bỏ các tiện ích tải dữ liệu tùy chọn là một đánh đổi có chủ đích nhằm tăng độ ổn định.
* Không có máy chủ nào có thể đảm bảo kết quả giống hệt nhau trên mọi máy, phiên bản trình duyệt, trạng thái bộ nhớ đệm hoặc cấu hình mạng.

## Ghi công và nguồn đóng góp

**Tác giả:** [WeAreDragonTeam17](https://github.com/WeAreDragonTeam17)<br>
**Về chúng tôi:** [WeAreDragonTeam17](https://github.com/WeAreDragonTeam17)<br>
**Chúng tôi là:** [WeAreDragonTeam17](https://github.com/WeAreDragonTeam17)

Kho mã chứa các thành phần khai thác lỗ hổng riêng theo từng phiên bản phần mềm hệ thống, các mô-đun hỗ trợ và những thông báo nguồn được bảo lưu từ dự án gốc. Vui lòng giữ nguyên các thông báo và phần ghi công ban đầu đi kèm với những thành phần đó.

> Đối với mọi hình thức sử dụng tài liệu hoặc tệp, các liên kết đến tác giả [WeAreDragonTeam17](https://github.com/WeAreDragonTeam17) vui lòng giữ nguyên, nghiêm cấm chỉnh sửa dưới mọi hình thức.

---

<p align="center">
  <sub>WeAreDragonTeam17 · Trang Kích Hack PlayStation (PS4)</sub>
</p>