import {
  AirportsContainer,
  TitleWithAirportsInfo,
} from '@/components/templates/airport/Airport';
import { Page } from '@/types/page';
import { Metadata } from 'next';
import { Table } from '@/components/molecules/table/Table';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';

export const metadata: Metadata = {
  title: 'Airports | Sidewalk',
};

export const AirportPage = (props: Page) => {
  const t = useTranslatedWord('airports.info');
  return (
    <AirportsContainer>
      <TitleWithAirportsInfo>
        <h2>{t('japan')}</h2>
        <span>{t('count')}:23</span>
        <span>{t('updatedAt')}:2024/2/11</span>
      </TitleWithAirportsInfo>
      <Table.Container>
        <Table.Header>
          <Table.Column flex="1">공항아이콘</Table.Column>
          <Table.Column flex="2">공항이름</Table.Column>
          <Table.Column flex="1">IATA</Table.Column>
          <Table.Column flex="1">ICAO</Table.Column>
          <Table.Column flex="3">주소</Table.Column>
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
    </AirportsContainer>
  );
};

export default AirportPage;

const getAirports = async () => {};
