# React-shopping-web
## 메인페이지
![pc화면 메인](https://user-images.githubusercontent.com/94600999/182101943-c47cd820-1018-4186-87f2-39ab7768f2f5.PNG)

## 핸드폰 화면
![모바일화면 메인](https://user-images.githubusercontent.com/94600999/182102037-47b08bfb-c6be-4c56-9aa3-b7d6a9e5def1.PNG)

+ Demo [star shose](https://ornate-zuccutto-f67dc4.netlify.app/)

# 목차
+ React와 Vue를 쓰면서 느낀점
+ 문제해결한 부분
+ 문제점
+ 마치며

# 1. React와 Vue를 쓰면서 느낀점
쇼핑몰 프로젝트를 진행할 때에 React와 Vue 중에 무엇을 먼저 할지 고민을 많이 했습니다. React와 Vue 둘다 프레임워크이기에 크게 차이가 있겠나?라고 생각했지만 둘다 해보니 차이점이 보였습니다.
## 1.1 공부량
Vue가 확실히 React보다 공부량이 적다는 느낌을 받았습니다. 상태관리 부분에서 React는 Redux, MobX 등등 + 중간에 미들웨어(회사마다 사용하는 것이 다르다고 생각됨) Vue는 Vuex 하나로 하는 것 같아 Vue가 공뷰량이 더 적은 거 같다고 느꼈습니다.   
## 1.2 props
React는 useState를 통해서 만든 걸 이용해서 자식 컴포넌트에서 쉽게 값을 변경할 수 있었지만 Vue에서는 emit이라는 것을 활용해야 하다보니 작업할 것이 더 많다고 느껴졌습니다.
## 1.3 정보량
정보량은 확실히 React가 더 많았습니다. 인력시장에서 React를 더 선호해서 그런지 Vue보다 정보를 얻기 더 쉬웠습니다.

# 문제해결한 부분
## 1. checkbox 체크여부
카트에 담은 상품을 사려고 선택하고 다른 페이지로 이동하면 체크한 것이 없어지는 현상을 ref로 해결하려고 했으나 검색해보니 checked라는 걸로 쉽게 해결할 수 있었습니다.   
ref 코드
```
useEffect(() => {
  inputListChange([...props.cart])
  for(let i=0;i<props.cartCopy.length;i++){
    if(props.cart[i].product_select === true){
      inputRefList[i].current.checked = true
    }
  }
})
```
checked 코드
```
<input checked="product.product.product_select">
```

## 2. select 태그에 스크롤 바 생성
select에 사이즈를 설정해줘서 스크롤 바 생성
```
select.size = 2
```

# 3. 문제점
## 1. 핸드폰 화면일 때 상품화면이 이상함
[러블리슈즈](https://lovelyshoes.co.kr/)의 디자인을 클론코딩해서 디자인을 했는데 css 능력부족으로 핸드폰 화면일 때 꽉 안차고 공간이 생김
![모바일화면 상품배열](https://user-images.githubusercontent.com/94600999/182102337-6528a6e2-3ec9-461a-9f74-1163040a18ea.PNG)
## 2. 주소가 존재하는 지 확인 불가
주소, 우편번호를 찾아주는 api를 찾았으나 적용이 제대로 안됨. api를 이해하고 다음 프로젝트에 도입할 예정

# 4. 마치며
프로젝트를 진행하면서 기본기를 잘 만들어놓고 조바심내지 말고 조금씩 하나를 배우더라도 제대로 배워야겠다고 느꼈습니다. 프로젝트를 진행하면서 css에서 막히는 것이 많았습니다. 이렇게하면 되겠지?라고 생각했는데 막상하니 안되서 삽질을 많이해서 기본기를 쌓는 시간을 만들어야 겠다고 느꼈습니다.   