// import {
//   BRIDE_FULLNAME,
//   GROOM_FULLNAME,
//   LOCATION,
//   SHARE_ADDRESS,
//   SHARE_ADDRESS_TITLE,
//   WEDDING_DATE,
//   WEDDING_DATE_FORMAT,
// } from "../../const"
// import ktalkIcon from "../../icons/ktalk-icon.png"
// import { LazyDiv } from "../lazyDiv"
// import { useKakao } from "../store"

// /**
//  * 카카오톡으로 초대장을 공유할 수 있는 버튼 컴포넌트입니다.
//  *
//  * @returns {JSX.Element} 공유 버튼 섹션
//  */
// export const ShareButton = () => {
//   const kakao = useKakao()
//   return (
//     <LazyDiv className="footer share-button">
//       <button
//         className="ktalk-share"
//         onClick={() => {
//           // 카카오 SDK 로드 전이면 무시
//           if (!kakao) {
//             return
//           }

//           // 카카오톡 공유 전송 (피드 템플릿 사용 - 위치보기 버튼 제거)
//           kakao.Share.sendDefault({
//             objectType: "feed",
//             content: {
//               title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
//               description:
//                 WEDDING_DATE.format(WEDDING_DATE_FORMAT) + "\n" + LOCATION,
//               imageUrl: "https://joongjini.site/cover_s.png",
//               link: {
//                 mobileWebUrl: "https://joongjini.site",
//                 webUrl: "https://joongjini.site",
//               },
//             },
//             buttons: [
//               {
//                 title: "초대장 보기",
//                 link: {
//                   mobileWebUrl: "https://joongjini.site",
//                   webUrl: "https://joongjini.site",
//                 },
//               },
//             ],
//           })
//         }}
//       >
//         <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
//       </button>
//     </LazyDiv>
//   )
// }

import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

/**
 * 카카오톡으로 초대장을 공유할 수 있는 버튼 컴포넌트입니다.
 *
 * @returns {JSX.Element} 공유 버튼 섹션
 */
export const ShareButton = () => {
  const kakao = useKakao()
  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={() => {
          // 카카오 SDK 로드 전이면 무시
          if (!kakao) {
            return
          }

          // 카카오톡 공유 전송 (사용자 정의 템플릿 사용)
          kakao.Share.sendCustom({
            templateId: 138297, // 👈 123456을 지우고 복사하신 숫자 템플릿 ID를 넣으세요 (따옴표 없이 숫자만!)
          })
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}