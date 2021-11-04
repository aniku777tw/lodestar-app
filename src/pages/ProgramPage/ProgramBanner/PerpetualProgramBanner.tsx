import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BlurredBanner from '../../../components/common/BlurredBanner'
import { BREAK_POINT } from '../../../components/common/Responsive'
import { Program } from '../../../types/program'

const StyledTags = styled.div`
  margin-bottom: 1rem;
  color: white;
  font-size: 14px;
`
const StyledTitle = styled.h1`
  margin: 0;
  color: white;
  font-size: 28px;
  line-height: 1.23;
  letter-spacing: 0.23px;

  @media (min-width: ${BREAK_POINT}px) {
    font-size: 40px;
  }
`
const StyledVideoWrapper = styled.div<{ backgroundImage?: string }>`
  position: relative;
  padding-top: 56.25%;
  ${props => props.backgroundImage && `background-image: url(${props.backgroundImage});`}
  background-size: cover;
  background-position: center;
`
const StyledPlayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: black;
`

const StyledTitleBlock = styled.div<{ noVideo?: boolean }>`
  position: relative;
  padding: ${props => (props.noVideo ? '6rem 2rem' : '2rem')};

  @media (min-width: ${BREAK_POINT}px) {
    padding: ${props => (props.noVideo ? '7.5rem 2rem' : '4rem 2rem')};
  }
`
const StyledVideoBlock = styled.div`
  position: relative;
  margin-bottom: -1px;
  padding-bottom: 2px;
  background: linear-gradient(to bottom, transparent 50%, white 50%);
`
const StyledLink = styled(Link)`
  color: white;
`

const PerpetualProgramBanner: React.VFC<{
  program: Program & {
    tags: string[]
  }
}> = ({ program }) => {
  return (
    <BlurredBanner coverUrl={program.coverUrl || undefined}>
      <StyledTitleBlock noVideo={!program.coverVideoUrl}>
        <StyledTags className="text-center">
          {program.tags?.map(programTag => (
            <StyledLink key={programTag} to={`/search?tag=${programTag}&tab=programs`} className="mr-2">
              #{programTag}
            </StyledLink>
          ))}
        </StyledTags>

        <StyledTitle className="text-center">{program.title}</StyledTitle>
      </StyledTitleBlock>

      {program.coverVideoUrl && (
        <StyledVideoBlock>
          <div className="container">
            <StyledVideoWrapper>
              <StyledPlayer>
                <video
                  className="smartvideo"
                  src={program.coverVideoUrl}
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%' }}
                />
              </StyledPlayer>
            </StyledVideoWrapper>
          </div>
        </StyledVideoBlock>
      )}
    </BlurredBanner>
  )
}

export default PerpetualProgramBanner