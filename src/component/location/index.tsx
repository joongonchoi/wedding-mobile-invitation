import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 셔틀버스 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">셔틀버스</div>
          <div />
          <div className="content">
            평택역 1번 출구 맞은편 차앤박피부과의원 앞 
            <br />
            (도보 2분)
          </div>
        </div>

        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            <b>지하철</b>
            <br />
            1호선 평택역 1번 출구 도보 5분 거리 
            <br />
            (평택역 오거리 → 독일보청기 방향 300m)
          </div>
          <div />
          <div className="content">
            <b>버스</b>
            <br />
            - 일반 | 평택역, 우리은행 하차 후 도보 5분 거리 M프라자 빌딩 9층
            <br />
            <br />
            - 터미널 | 평택 고속버스터미널 하차 (AK PLAZA 앞)
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            <b>네비게이션</b> | 경기도 평택시 중앙로 46 (평택동 35-3) THE VERA(더 베라)
            <br />
            <br />
            <b>고속도로</b> | 안성IC → 좌회전 → 평택역 방향 → 농협사거리 M프라자 빌딩
            <br />
            <br />
            <b>무료도로</b> | 1번국도 → 오산 → 송탄출장소 → 평택역 방향 → 평택역 앞 사거리 평택경찰서 방향 → 농협사거리 M프라자 빌딩
          </div>
          <div />
          <div className="content">
            <b>주차 안내</b>
            <br />
            <span style={{ letterSpacing: "-1px" }}>
              M프라자 빌딩 지하 1, 2, 3층 또는 자란공영주차장
            </span>
            <br />
            (차량번호 등록 필요, 2시간 무료 주차)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}