'use Client';

import { Table } from '@/components/molecules/table/Table';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef } from 'react';

type AirportProps = React.ComponentPropsWithoutRef<'section'>;

const Airport = (props: AirportProps) => {
  const t = useTranslatedWord('airports.info');
  return (
    <section {...stylex.props(styles.airportContainer)} {...props}>
      <TitleWithAirportsInfo>
        <h2>{t('japan')}</h2>
        <span>{t('count')}:23</span>
        <span>{t('updatedAt')}:2024/2/11</span>
      </TitleWithAirportsInfo>
      <Table.Container>
        <Table.Header>
          <Table.Column flex="1">공항이미지</Table.Column>
          <Table.Column flex="2">공항이름</Table.Column>
          <Table.Column flex="1">IATA</Table.Column>
          <Table.Column flex="1">ICAO</Table.Column>
          <Table.Column flex="3">위치</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Header>
        <Table.Row>
          <Table.Column flex="1">인천공항이미지</Table.Column>
          <Table.Column flex="2">인천국제공항</Table.Column>
          <Table.Column flex="1">ICN</Table.Column>
          <Table.Column flex="1">RKSI</Table.Column>
          <Table.Column flex="3">인천광역시 중구 제 1여객터미널</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column flex="1">인천공항이미지</Table.Column>
          <Table.Column flex="2">인천국제공항</Table.Column>
          <Table.Column flex="1">ICN</Table.Column>
          <Table.Column flex="1">RKSI</Table.Column>
          <Table.Column flex="3">인천광역시 중구 제 1여객터미널</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column flex="1">인천공항이미지</Table.Column>
          <Table.Column flex="2">인천국제공항</Table.Column>
          <Table.Column flex="1">ICN</Table.Column>
          <Table.Column flex="1">RKSI</Table.Column>
          <Table.Column flex="3">인천광역시 중구 제 1여객터미널</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Row>
      </Table.Container>
      <TitleWithAirportsInfo>
        <h2>{t('korea')}</h2>
        <span>{t('count')}:23</span>
        <span>{t('updatedAt')}:2024/2/11</span>
      </TitleWithAirportsInfo>
      <Table.Container>
        <Table.Header>
          <Table.Column flex="1">공항이미지</Table.Column>
          <Table.Column flex="2">공항이름</Table.Column>
          <Table.Column flex="1">IATA</Table.Column>
          <Table.Column flex="1">ICAO</Table.Column>
          <Table.Column flex="3">위치</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Header>
        <Table.Row>
          <Table.Column flex="1">인천공항이미지</Table.Column>
          <Table.Column flex="2">인천국제공항</Table.Column>
          <Table.Column flex="1">ICN</Table.Column>
          <Table.Column flex="1">RKSI</Table.Column>
          <Table.Column flex="3">인천광역시 중구 제 1여객터미널</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column flex="1">인천공항이미지</Table.Column>
          <Table.Column flex="2">인천국제공항</Table.Column>
          <Table.Column flex="1">ICN</Table.Column>
          <Table.Column flex="1">RKSI</Table.Column>
          <Table.Column flex="3">인천광역시 중구 제 1여객터미널</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column flex="1">인천공항이미지</Table.Column>
          <Table.Column flex="2">인천국제공항</Table.Column>
          <Table.Column flex="1">ICN</Table.Column>
          <Table.Column flex="1">RKSI</Table.Column>
          <Table.Column flex="3">인천광역시 중구 제 1여객터미널</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Row>
      </Table.Container>
    </section>
  );
};

export default Airport;

type TitleWithAirportsInfoProps = ComponentPropsWithoutRef<'div'>;
const TitleWithAirportsInfo = (props: TitleWithAirportsInfoProps) => {
  return <div {...stylex.props(styles.titleWithAirportsInfo)} {...props} />;
};

const styles = stylex.create({
  airportContainer: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  titleWithAirportsInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
  },
});
