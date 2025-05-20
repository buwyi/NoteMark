import styled from 'styled-components';

export const TrafficLightWrapper = styled.div`
  #mac-taffic-btns {
    -webkit-app-region: no-drag;
    &:hover {
      #close,
      #min,
      #max {
        svg {
          opacity: 1;
        }
      }
    }
    .operate-btn {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      cursor: pointer;
      z-index: 9999;
    }
    #close,
    #min,
    #max {
      svg {
        opacity: 0;
        transition: all 0.3s;
      }
    }
    #close {
      background-color: #ff5f57;
    }
    #min {
      background-color: #ffbd2e;
    }
    #max {
      background-color: #28c840;
    }
  }
`;
