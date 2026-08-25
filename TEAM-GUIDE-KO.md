# PEC Lab 홈페이지 공동작업 가이드

코딩 경험이 많지 않아도 GitHub 웹사이트만으로 대부분의 콘텐츠를 수정할 수 있습니다.

## 가장 중요한 규칙

**`main` 브랜치는 직접 수정하지 않습니다.**

모든 작업은 새 브랜치에서 진행하고, 작업이 끝나면 Pull Request(PR)를 만든 뒤 최종 담당자가 확인해서 `main`에 합칩니다.

## 1. 담당 파일

| 담당 업무 | 수정할 파일/폴더 |
|---|---|
| 교수님 정보 | `data/professor.ts` |
| 현재 멤버 | `data/members.ts`, `public/images/people/` |
| Alumni | `data/alumni.ts` |
| 논문 | `data/publications.ts` |
| 특허 | `data/patents.ts` |
| 학회 발표 | `data/presentations.ts` |
| News / 수상 | `data/news.ts` |
| Gallery | `data/gallery.ts`, `public/images/gallery/` |
| 홈페이지 이미지 연결 | `data/media.ts` |

가능하면 본인 담당 파일 이외의 파일은 수정하지 않습니다. 이렇게 하면 여러 명이 동시에 작업해도 충돌이 거의 없습니다.

## 2. 새 브랜치 만들기

1. GitHub의 `pec-lab-website` 저장소에 들어갑니다.
2. 왼쪽 위의 `main` 버튼을 클릭합니다.
3. `View all branches` 또는 새 브랜치 생성 메뉴를 선택합니다.
4. 작업을 설명하는 이름으로 브랜치를 만듭니다.

예:

```text
members-update
publications-2026
gallery-2026-summer
news-update
```

브랜치를 만든 뒤 화면 왼쪽 위에 `main`이 아니라 **본인이 만든 브랜치 이름**이 표시되는지 확인합니다.

## 3. 파일 수정하기

텍스트 데이터는 해당 `.ts` 파일을 열고 연필 모양 `Edit` 버튼으로 수정합니다.

이미지는 해당 폴더에서:

`Add file` → `Upload files`

으로 올립니다.

이미지 파일명은 영문 소문자와 하이픈을 권장합니다.

```text
dongho-seo.jpg
gallery-2026-kecs-spring-01.jpg
research-photoelectrochemistry.png
```

## 4. Commit 하기

작업이 끝나면 `Commit changes`를 누릅니다.

권장 Commit message:

```text
Update member profiles
Add 2026 publications
Add conference gallery photos
Update lab news
```

Commit 전에 현재 브랜치가 `main`이 아닌지 다시 확인합니다.

## 5. Pull Request 만들기

작업 후 저장소 상단의 `Pull requests` → `New pull request`로 들어갑니다.

- base: `main`
- compare: 본인의 작업 브랜치

으로 설정합니다.

PR 제목 예:

```text
Update current members
Add 2026 publications
Update summer 2026 gallery
```

PR을 만들면 체크리스트가 자동으로 표시됩니다.

## 6. Vercel Preview 확인

PR/브랜치가 GitHub에 올라가면 Vercel이 별도의 Preview 배포를 만듭니다.

Preview 사이트에서 다음을 확인합니다.

- 내용이 맞는지
- 사진이 깨지지 않는지
- PC에서 정상인지
- 휴대폰 화면에서도 이상하지 않은지

실제 `pec-lab-website-five.vercel.app` 사이트는 `main`이 변경되기 전까지 그대로 유지됩니다.

## 7. 최종 Merge

최종 홈페이지 담당자가 PR과 Preview를 확인한 뒤 Merge합니다.

Merge되면 Vercel이 `main`을 자동으로 새 Production 버전으로 배포합니다.

## 하지 말아야 할 것

- `main`에서 직접 대규모 수정
- 여러 업무를 하나의 branch에 섞기
- 비밀번호, 개인 문서, 공개 전 논문 원고/데이터 업로드
- 같은 이미지의 `final`, `final2`, `real_final` 버전을 계속 추가
- DOI나 이메일을 확인하지 않고 등록

## 문제가 생기면

Merge 전이라면 실제 홈페이지에는 영향이 없습니다. 작업 branch를 그대로 두고 PR에 무엇이 문제인지 적은 뒤 담당자에게 검토를 요청하면 됩니다.
