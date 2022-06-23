// exception.js

let fname = document.getElementById('selectFile');  //input태그를 fname에 담아서 파일을 utf-8 버전으로읽겠다

let data = '';
try {

    const reader = new FileReader(); //객체생성
    reader.addEventListener('load', function () {
        data = reader.result;
        console.log('파일 내용: ' + data);
    })
    reader.addEventListener('error', function () {
        throw '파일 읽기 에러';
    })
    fname.addEventListener('change', function () {
        reader.readAsText(fname.files[0], 'utf-8');
    })

} catch (err) {
    console.log(err.message);
    console.log('정상 진행.');

}