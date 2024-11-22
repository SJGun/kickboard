
# ⭐🛴 KickBoard Breaker⭐


![메인페이지](./exec/READMEIMG/main.jpg)

<!-- 킥보드 불법 주정차 신고시스템 개선 프로젝트 -->
<!-- 

## 프로젝트 기획 배경

- 킥보드 불법 주정차 신고시스템의 불편한 점을 발견해 이를 개선하기 위한 프로젝트

<br>

## 프로젝트 소개

- 신고 및 수거업체 관리 통합 플랫폼
- 관리자(공무원)의 일 처리 경험 개선

##### 프로젝트 기간 
###### 2024.10.14 ~ 2024.11.19 (약 5주)

##### 프로젝트 소개
"킥보드 불법 주정차 신고시스템"의 불편한 점을 발견해 <br> 이를 개선하기 위한 프로젝트<br>

-->

|||
|---|---|
|프로젝트 기간|2024.10.14 ~ 2024.11.19 (약 5주) <br/> |
|프로젝트 소개|"킥보드 불법 주정차 신고시스템"의 불편한 점을 발견해 <br> 이를 개선하기 위한 프로젝트<br>|

<details>
<summary>세부 일정</summary>
<div markdown="1">

| 시작일   | 종료일   | 개발 내용                                    | 담당자      |
| ------------- | ------------- | ------------------------------------------- | ----------- |
| 2024.10.14    | 2024.10.17    | 기능 목록 상세 도출                         | 팀 전체     |
| 2024.10.17    | 2024.10.18    | 화면 기획 (화면 정의서 작성)                | 프론트엔드 |
| 2024.10.18    | 2024.10.22    | UI/UX 디자인 작업                          | 프론트엔드 |
| 2024.10.23    | 2024.10.28    | 백엔드 구조 설계 및 API 개발                | 백엔드      |
| 2024.10.23    | 2024.10.28    | 프론트엔드 구조 설계 및 초기 화면 구현      | 프론트엔드 |
| 2024.10.29    | 2024.11.03    | 사용자 신고 기능 개발                       | 백엔드      |
| 2024.11.04    | 2024.11.06    | 위치 정보 기록 및 관리자 기능 개발          | 프론트엔드 |
| 2024.11.09    | 2024.11.12    | 알림 기능 및 통계 분석 기능 개발            | 팀 전체     |
| 2024.11.13    | 2024.11.15    | 배포 테스트 및 버그 수정                    | 팀 전체     |
| 2024.11.16    | 2024.11.16    | 최종 검토 및 최종 발표 준비                 | 팀 전체     |

</div>
</details>
<details>
<summary> 기획배경 </summary>
<div markdown="1">

#### 기획 배경

![메인페이지](./exec/READMEIMG/news.jpg)

전동 킥보드의 사용이 급증하면서, 많은 도시에서 불법 주정차 문제를 겪고 있습니다. 킥보드가 보행로, 교차로, 장애물 구역 등지에 방치되면 보행자와 운전자의 안전을 위협하고, 도시의 미관을 해치는 문제를 일으킬 수 있습니다. 특히, 공유 킥보드 시스템이 활성화되면서 불법 주정차된 킥보드가 더 빈번하게 발생하고 있습니다.

![메인페이지](./exec/READMEIMG/gongmu.jpg)

![메인페이지](./exec/READMEIMG/gongmu2.jpg)


기존의 불법 주정차 신고시스템은 사용자가 신고를 하더라도, 신고 후 처리까지 시간이 오래 걸리거나, 신고 절차가 복잡하여 시민들의 참여를 유도하는 데 어려움이 있었습니다. 또한, 관리자(공무원)는 신고된 내용을 처리하기 위한 업무 처리 과정에서의 비효율성과 처리 현황 파악의 어려움을 겪고 있었습니다.

![메인페이지](./exec/READMEIMG/process.jpg)

이 문제를 해결하기 위해, 시민들이 쉽게 신고하고, 관리자가 빠르고 효율적으로 문제를 처리할 수 있는 시스템이 필요하다는 점에서 신고 및 수거업체 관리 통합 플랫폼을 개발하게 되었습니다. 이를 통해 불법 주정차 문제를 보다 효율적으로 해결하고, 시민들의 참여를 촉진하며, 도시 환경을 개선할 수 있도록 지원하는 것이 본 프로젝트의 기획 배경입니다.
</div>
</details>

<details>
<summary>주요 특징 </summary>
<div markdown="1">

#### 주요 특징 

1. 신고 및 수거업체 관리 통합 <br>
시민들이 불법 주정차된 전동 킥보드를 쉽게 신고할 수 있는 시스템과, 신고된 사항을 수거업체가 효율적으로 처리할 수 있도록 관리 기능을 통합한 플랫폼입니다.
신고 과정에서 사진과 위치 정보를 자동으로 기록하여 정확한 신고가 가능하며, 이를 통해 빠르고 정확한 문제 해결을 지원합니다.<br><br>
2. 관리자(공무원)의 일 처리 경험 개선<br>
관리자(공무원)는 신고된 킥보드의 처리 현황을 실시간으로 확인하고, 수거업체와 협력하여 빠르게 문제를 해결할 수 있습니다.
자동화된 처리 시스템을 통해 관리자는 불필요한 작업을 줄이고, 보다 효율적으로 업무를 처리할 수 있습니다.
통계 및 분석 기능을 제공하여 지역별, 시간대별 신고 패턴을 분석하고, 정책 개선에 활용할 수 있습니다.
</div>
</details>


## 팀원 구성

<div align="center">

| **채기훈** | **지예찬** | **정지영** | **곽재은** | **정소영** | **김희주** | **신재건** |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/Hun425?v=4" height=150 width=150><br/> @Hun425](https://github.com/Hun425) | [<img src="https://avatars.githubusercontent.com/dev-yesam?v=4" height=150 width=150><br/> @dev-yesam](https://github.com/dev-yesam) | [<img src="https://avatars.githubusercontent.com/jiiiyoung?v=4" height=150 width=150><br/> @정지영](https://github.com/jiiiyoung) | [<img src="https://avatars.githubusercontent.com/trick0846?v=4" height=150 width=150><br/> @곽재은]() | [<img src="https://avatars.githubusercontent.com/lovelySo03?v=4" height=150 width=150><br/> @정소영](https://github.com/lovelySo03) | [<img src="https://avatars.githubusercontent.com/walley78?v=4" height=150 width=150><br/> @김희주](https://github.com/walley78) | [<img src="https://avatars.githubusercontent.com/sjgun?v=4" height=150 width=150><br/> @신재건](https://github.com/sjgun) |


</div>

<br>

## 1. 기술 스택

![메인페이지](./exec/READMEIMG/skill.jpg)

### FRONT

| <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <br/> <img src="https://img.shields.io/badge/zustand-ff5f00?style=for-the-badge&logo=zustand&logoColor=white"> <br/> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> |
| --- |
|**React** : Vue.js 보다 자유로운 편집 및 커스텀|


### BACK
| <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"> <br/> <img src="https://img.shields.io/badge/postgresql-336791?style=for-the-badge&logo=postgresql&logoColor=white"> <img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white"> <img src="https://img.shields.io/badge/jsonwebtokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"> |
| --- |
| **Spring** : 향후 서비스 확장시 유연하게 대처하기 위한 Java 기반 Spring Framework <br/> **JDK21** : record 기능을 사용한 Dto 및 가상 스레드 활용을 위한 JDK21 사용|


### INFRA

|<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> <img src="https://img.shields.io/badge/amazon%20ec2-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white"> <img src="https://img.shields.io/badge/amazon%20s3-569A31?style=for-the-badge&logo=amazon-aws&logoColor=white">|
|---|
|브랜치 전략 <br/> 기본적인 역할분담은 Jira 및 WBS를 통해 세분화<br/> 각 세분화된 기능들을 branch로 생성해 main에 merge 하는 방식으로 협업을 진행<br/> dev 와 master branch를 분리하고, master는 자동 배포용 dev는 개발용으로 branch를 분리|



## 2. 작업관리

|<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <br/> <img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">  <img src="https://img.shields.io/badge/mattermost-0077B5?style=for-the-badge&logo=mattermost&logoColor=white"> |
|---|
||

<details>
<summary>Jira를 활용한 세부적인 업무분담</summary>
<div markdown="1">
<br/>

| Jira |
|---|
| ![메인페이지](./exec/READMEIMG/jira3.png) |
| ![메인페이지](./exec/READMEIMG/jira1.png) |
| ![메인페이지](./exec/READMEIMG/jira2.png) |

</div>
</details>

<details>
<summary>Gitlab branch를 사용한 협업</summary>
<div markdown="1">
 <br/>

| Gitlab |
|---|
| ![메인페이지](./exec/READMEIMG/git1.jpg) |
| ![메인페이지](./exec/READMEIMG/git2.jpg) |
| ![메인페이지](./exec/READMEIMG/git3.jpg) |
| ![메인페이지](./exec/READMEIMG/git4.jpg) |
| ![메인페이지](./exec/READMEIMG/git5.jpg) |

</div>
</details>

<details>
<summary>Notion을 활용한 팀 활동 기록</summary>
<div markdown="1">
 <br/>

| Notion|
|---|
| ![메인페이지](./exec/READMEIMG/notion.png) |

</div>
</details>

<details>
<summary>코드 및 커밋 컨벤션을 활용한 코드 품질 관리</summary>
<div markdown="1">
 <br/>

| Convention |
|---|
| ![메인페이지](./exec/READMEIMG/convention.png) |

</div>
</details>


## 3. 명세서

<details> <summary> 기능명세서 </summary>
<div markdown="1">

![Copy_of_킥보드브레이커__1](exec/READMEIMG/function.png)

</div>
</details>

<details> <summary> API 명세서 </summary>
<div markdown="1">
 <!-- Swagger -->

![Copy_of_킥보드브레이커__1](exec/READMEIMG/api.png)

</div>
</details>

## 4. 화면 및 DB 설계

<details>
<summary>Figma</summary>
<div markdown="1">

| Figma |
|----------|
|![Copy_of_킥보드브레이커__1_](exec/READMEIMG/kickFigma.png)|

</div>
</details>

<details>
<summary>ERD</summary>
<div markdown="1">

| ERD |
|----------|
|![Copy_of_킥보드브레이커__1_](exec/READMEIMG/kickERD.png)|

</div>
</details>

## 5. 역할 분담

![메인페이지](./exec/READMEIMG/team.jpg)

| 이름 | 역할 | 내용 |   
| --- | --- |--- |
| 지예찬 |팀장, 백엔드|신고자 신고 및 조회 기능<br/>신고 카테고리 분류 기능 <br/> 신고 요청 및 응답 <br/> 중간 및 최종 발표  | 
| 채기훈 | 백엔드|유저 API, 수거업체 API<br/>역할배분 및 일정관리<br/>README 작성 | 
| 정지영 | 인프라| 인프라<br/>AWS EC2 인스턴스 설정<br/>Docker & Jenkins 활용| 
| 정소영 | 풀스택| 계정관리 (관리자, 수거업체) <br/>공지사항 백엔드 & 프런트 <br/>회의 및 DailyScrum 기록 <br/>PPT제작 & README 작성|
| 곽재은 | 프런트| 사용자 페이지<br/>킥보드 회사별 신고 기능<br/>신고 목록 조회<br/>지도, 위치 API<br/>프런트 공통 컴포넌트 제작|  
| 김희주 | 프런트| 수거업체 페이지 <br/>지도, 위치 API<br/>UCC 제작|  
| 신재건 | 프런트| 관리자 메인페이지<br/>킥보드별 신고접수 현황 분류<br/>지도 및 위치 API <br/> 주소 및 키워드 검색 |  
<br/>

## 6. 서비스 페이지

### ① 사용자 페이지


| 신고페이지 | 신고하기 |
| --- |--- |
|![메인페이지](exec/READMEIMG/u1.png) |![메인페이지](exec/READMEIMG/u3.png) | 

| 신고목록 | 신고 위치확인 |
| --- |--- |
|![메인페이지](exec/READMEIMG/u2.png) |![메인페이지](exec/READMEIMG/u4.png) | 

| 공지사항 | 공지사항 상세보기 |
| --- |--- |
|![메인페이지](exec/READMEIMG/u5.png) |![메인페이지](exec/READMEIMG/u6.png) | 

### ② 수거업체 페이지

| 로그인 | 수거목록 |
| --- |--- |
|![메인페이지](exec/READMEIMG/c1.png) |![메인페이지](exec/READMEIMG/c2.png) | 

| 길찾기 | 처리하기 |
| --- |--- |
|![메인페이지](exec/READMEIMG/c3.png) |![메인페이지](exec/READMEIMG/c4.png) | 

| 처리 후 사진찍기 | 수거완료 |
| --- |--- |
|![메인페이지](exec/READMEIMG/c5.png) |![메인페이지](exec/READMEIMG/c6.png) | 

### ③ 관리자 페이지 


| 관리자 로그인 | 
| --- |
|![메인페이지](exec/READMEIMG/a1.png) | 

| 관리자 신고현황 | 
| --- |
|![메인페이지](exec/READMEIMG/a2.png) | 
|![메인페이지](exec/READMEIMG/a2.1.png) | 

| 관리자 지도 |
| --- |
|![메인페이지](exec/READMEIMG/a3.png) | 
|![메인페이지](exec/READMEIMG/a3.1.png) | 

| 계정관리 | 
| --- |
|![메인페이지](exec/READMEIMG/a4.png) | 

| 수거업체 계정관리 | 
| --- |
|![메인페이지](exec/READMEIMG/a5.png) | 

| 관리자 계정관리 | 
| --- |
|![메인페이지](exec/READMEIMG/a6.png) | 

| 공지사항 글쓰기 | 
| --- |
|![메인페이지](exec/READMEIMG/a9.png) | 

| 공지사항 | 
| --- |
|![메인페이지](exec/READMEIMG/a7.png) | 

| 공지사항 상세보기 | 
| --- |
|![메인페이지](exec/READMEIMG/a8.png) | 

<!-- 
<details>
<summary> 사용자 페이지 </summary>
<div markdown="1">

| 신고페이지 | 신고하기 |
| --- |--- |
|![메인페이지](exec/READMEIMG/u1.png) |![메인페이지](exec/READMEIMG/u3.png) | 

| 신고목록 | 신고 위치확인 |
| --- |--- |
|![메인페이지](exec/READMEIMG/u2.png) |![메인페이지](exec/READMEIMG/u4.png) | 

| 공지사항 | 공지사항 상세보기 |
| --- |--- |
|![메인페이지](exec/READMEIMG/u5.png) |![메인페이지](exec/READMEIMG/u6.png) | 


</div>
</details>

<details>
<summary> 수거업체 페이지 </summary>
<div markdown="1">

| 로그인 | 수거목록 |
| --- |--- |
|![메인페이지](exec/READMEIMG/c1.png) |![메인페이지](exec/READMEIMG/c2.png) | 

| 길찾기 | 처리하기 |
| --- |--- |
|![메인페이지](exec/READMEIMG/c3.png) |![메인페이지](exec/READMEIMG/c4.png) | 

| 처리 후 사진찍기 | 수거완료 |
| --- |--- |
|![메인페이지](exec/READMEIMG/c5.png) |![메인페이지](exec/READMEIMG/c6.png) | 

</div>
</details>

<details>
<summary> 관리자 페이지 </summary>
<div markdown="1">


| 관리자 로그인 | 
| --- |
|![메인페이지](exec/READMEIMG/a1.png) | 

| 관리자 신고현황 | 
| --- |
|![메인페이지](exec/READMEIMG/a2.png) | 

| 관리자 지도 | 
| --- |
|![메인페이지](exec/READMEIMG/a3.png) | 

| 계정관리 | 
| --- |
|![메인페이지](exec/READMEIMG/a4.png) | 

| 수거업체 계정관리 | 
| --- |
|![메인페이지](exec/READMEIMG/a5.png) | 

| 관리자 계정관리 | 
| --- |
|![메인페이지](exec/READMEIMG/a6.png) | 

| 공지사항 글쓰기 | 
| --- |
|![메인페이지](exec/READMEIMG/a9.png) | 

| 공지사항 | 
| --- |
|![메인페이지](exec/READMEIMG/a7.png) | 

| 공지사항 상세보기 | 
| --- |
|![메인페이지](exec/READMEIMG/a8.png) | 

</div>
</details> -->



## 7. 트러블 슈팅

| 이름       | 내용                                                                                      |
|------------|-------------------------------------------------------------------------------------------|
| **지예찬** | - **오류를 최소화**한 안정적인 개발<br>- 사진 등록 과정에서의 오류 수정 |
| **채기훈** | - 더 자세한 테스트 코드 (단위, 통합 구분)<br>- 서버 과부하 테스트 및 최적화<br>- **서버 확장 (MSA)** 시도 해보기<br>- **Java 21의 가상스레드** 적용해보기 |
| **정지영** | - **AWS EC2 인스턴스 설정 오류 해결**: EC2 인스턴스 설정 중, 초기 배포 후 메모리 부족 문제를 해결하기 위해 인스턴스 유형을 변경하고, 인스턴스 스케일링을 적용함.<br/> - **Docker & Jenkins 통합 문제 해결**: Docker 이미지가 Jenkins 파이프라인에서 제대로 빌드되지 않아, Dockerfile 및 Jenkinsfile을 최적화하고 빌드 설정을 수정하여 해결. <br/> - **Spring Boot와 데이터베이스 연동 오류**: 공지사항 데이터 처리에서 DB 연결 오류가 발생하여, JPA 쿼리 최적화 및 DB 연결 풀 설정을 수정하여 해결함.  |
| **정소영** | - **로그인 계정 UI/UX 개선** : React로 로그인 페이지를 구현하면서 사용자 경험을 개선. 초기에 입력 폼과 에러 메시지 표시가 직관적이지 않아 사용성이 떨어짐. 이를 해결하기 위해 에러 메시지와 입력 검증 로직을 개선하고, 더 직관적인 UI를 설계함. <br/>- **공지사항 데이터 처리 오류**: 공지사항 기능에서 Spring Boot를 사용해 백엔드 API를 개발함. 데이터베이스 연동 과정에서 공지사항 업데이트 시 데이터 불일치 문제가 발생했으며, 이를 해결하기 위해 JPA 쿼리와 API 로직을 수정함. <br/> - **배포 환경 UI 깨짐 문제**: 공지사항 페이지에서 Tailwind CSS 스타일이 특정 브라우저에서 올바르게 렌더링되지 않는 문제가 있었음. 브라우저 간 스타일 차이를 조사하고 Tailwind 설정을 수정하여 디자인 문제를 해결함. |
| **곽재은** | - 전체 구조를 생각하면서 틀을 짰으나, 더 **효율적인 구조**를 생각나서 중간에 바꿈 (시간 소요)<br>- 서버와의 통신 시 에러 처리에 어려움 (특히 값이 제대로 오지 않을 때 고려해야 함)<br>- **코드 재사용성**에 대한 중요성 인식 |
| **김희주** | - 코드의 재사용성을 생각하면서 개발하기 <br/> - 백에서 수거목록 리스트를 불러오고 관리할 때, 각 리스트에 인덱스를 부여해서 관리했는데 페이지가 새로고침/리렌더링 될때마다 리스트의 인덱스가 달라지는 이슈 발생 (백에서 새롭게 갱신된 리스트를 받아올 때마다 순서가 유지되지 않기 때문) <br/> - 각 리스트 고유의 값 `RequestId`를 리스트 관리를 위한 새로운 key로 설정함으로써 리스트가 갱신되거나 리스트 내부의 순서가 바뀌어도 리스트를 올바르게 선택할 수 있도록 함. <br/> - 카카오맵을 활용; 지도에서 지역 선택 후에도 이전 지역의 위치가 유지됨 <br/> -`useEffect`를 활용하여 선택된 지역이 변경될 때 지도 중심 좌표를 재설정하도록 수정하고, 상태 관리를 `Zustand`를 사용하여 간소화. |
| **신재건** |- **상태 변경 및 리렌더링 문제 해결**: 관리자의 메인 페이지에서 신고 처리 상태가 변경될 때, 해당 변경 사항이 즉시 화면에 반영되지 않는 문제 발생. 이를 해결하기 위해 상태 변경 후 리렌더링이 잘 되도록 `setSelectedReport`와 `setReports`를 적절히 활용하여 상태를 업데이트하는 방식으로 수정함.<br/> - **API 데이터 로딩 시 오류 처리**: API에서 데이터를 불러오는 과정에서 실패하는 경우, `setError`를 사용하여 사용자에게 명확한 오류 메시지를 제공하도록 개선함. 이를 통해 데이터 로딩 실패 시 사용자 경험을 향상시킴.<br/> - **정렬 및 필터링 성능 개선**: 리포트 목록을 정렬하고 필터링하는 과정에서 데이터 양이 많아질 경우 성능 문제가 발생할 수 있었음. `useMemo` 훅을 사용하여 정렬 및 필터링 계산을 최적화하고, 불필요한 리렌더링을 줄여 성능을 개선함.<br/> - **지도 API 오류 처리**: 지도에서 선택된 위치가 제대로 반영되지 않는 문제 발생. 지도 컴포넌트에서 `selectedReport` 상태를 업데이트할 때 위치 정보가 갱신되지 않는 문제를 해결하기 위해, `useEffect`를 활용하여 해당 위치가 변경될 때마다 지도 중심 좌표를 재설정하도록 수정. |


## 8. 개인 목표

| 이름 | 역할 | 개인 목표 |  
| --- | --- | --- |  
| 지예찬 | 팀장, 백엔드 | 오류를 최소화한 안정적인 개발 |  
| 채기훈 | 백엔드 | 더 자세한 테스트 코드 작성 (단위, 통합 구분) <br/> 서버 과부하 테스트 및 최적화 <br/> 서버 확장 (MSA) 시도 <br/> Java 21의 가상스레드 적용 |  
| 정지영 | 백엔드, 인프라 | 실질적인 문제 해결 |  
| 정소영 | 풀스택 | 팀의 방향성을 항상 생각하면서 개발 진행 <br/> 팀에서 필요로 하는 업무 자원해서 맡아하기 |  
| 곽재은 | 프런트 | 내 부분이 아닌 개발 과정도 전부 파악 및 알아가기 |  
| 김희주 | 프런트 | 코드 재사용성을 고려하며 개발 <br/> 사용자 입장에서 사용하기 편리하고 오류 없는 컴포넌트 개발 |  
| 신재건 | 프런트 | 문제없이 기한 내 마무리 |  

<br>

## 9. 프로젝트 후기

![메인페이지](./exec/READMEIMG/thank.jpg)
| 이름 | 역할 | 느낀점 |   
| --- | --- | --- |
| 지예찬 | 팀장, 백엔드 | 팀장으로서 부족한 점을 많이 느꼈지만, 팀원들의 도움으로 프로젝트를 마무리할 수 있었던 거 같습니다. 특히 모바일 환경과 데스크탑 환경 모두에서 작동하는 어플리케이션이 좋았습니다. |  
| 채기훈 | 백엔드 | 팀원들과의 협업 과정에서 의사소통의 중요성을 다시 한 번 깨달았습니다. Jira를 활용한 업무 분담, Notion을 통한 API 명세 공유 등 체계적인 프로젝트 관리 방법을 경험했습니다. 프로젝트 진행 중 기술 고도화를 위한 개인 공부를 통해 더 발전하는 계기가 되었습니다. |  
| 정지영 | 백엔드 | 인프라 구축을 맡으면서 처음으로 Jenkins 파이프라인 설정에 도전해볼 수 있었습니다. 배포 환경을 설정하면서 많은 것을 배웠습니다. 팀원들과 협력하여 기술적 문제를 해결하는 과정에서 팀워크의 중요성을 깨달았습니다. |  
| 정소영 | 풀스택 | 계정 관리와 공지사항 기능을 풀스택으로 구현하며 React와 Spring Boot 간의 연동과 데이터 흐름을 깊이 이해할 수 있었습니다. 백엔드에서는 API 설계와 데이터베이스 연동의 중요성을 체감했고, 프런트엔드에서는 사용자 인터페이스와 비동기 데이터 처리 방법을 익혔습니다.<br/>  회의록 작성과 Daily Scrum 기록을 맡으면서 팀의 업무를 체계적으로 정리하고 관리할 수 있었으며, 발표 자료 제작 경험은 커뮤니케이션 능력 향상에 큰 도움이 되었습니다. 이번 프로젝트는 기술적 성장뿐만 아니라 팀워크와 협업 능력을 발전시키는 값진 경험이었습니다. |  
| 곽재은 | 프런트 | 사용자 페이지와 지도 및 위치 API 구현에 참여하면서 사용자 경험(UX)을 고려한 디자인과 기능 개발의 중요성을 배웠습니다. 공통 컴포넌트를 제작하며 재사용성과 효율성을 고려한 코드 작성 방법도 익힐 수 있었습니다.  |  
| 김희주 | 프런트 | 기능이나 코드에서 변경 사항이 있을 때마다 서로 소통하며 꾸준히 업데이트를 하는 것의 중요성에 대해 깨닫게 되었습니다. 기록의 중요성에 대해서도 깨닫게 되었는데, 개발 과정이나 개발환경 세팅과 같은 부분을 기록해두었던 것이 도움이 많이 되어서 기록을 앞으로 습관화해야겠다고 생각했습니다. |  
| 신재건 | 프런트 | 관리자 메인페이지 개발을 담당하며 관리자 관점에서의 서비스 설계 방법을 고민할 수 있었습니다. 지도 API와 검색 기능을 구현하며 API 활용 능력을 크게 키울 수 있었고, 프로젝트를 통해 문제 해결 능력을 배우게 되어 유익했습니다. |  
