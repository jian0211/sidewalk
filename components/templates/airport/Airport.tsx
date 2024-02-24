'use Client';

import { Table } from '@/components/molecules/table/Table';
import * as stylex from '@stylexjs/stylex';

type AirportProps = React.ComponentPropsWithoutRef<'section'>;

const Airport = (props: AirportProps) => {
  return (
    <section {...stylex.props(styles.airportContainer)} {...props}>
      <h1>일본 또는 한국으로 가는 공항정보입니다</h1>
      <h1>일본 공항정보</h1>
      <h1>한국 공항정보</h1>
      <div>
        <span>공항 수</span>
        <span>갱신 날짜</span>
      </div>
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
      <h1>일본 공항</h1>
      <div>asdasd</div>
    </section>
  );
};

export default Airport;

const styles = stylex.create({
  airportContainer: {},
});
