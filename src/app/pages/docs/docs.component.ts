import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  wsdl = `
  <?xml version="1.0" encoding="UTF-8"?>
  <wsdl:definitions name="ListWSService" targetNamespace="http://ws.das.ubp.edu.ar/" 
    xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" 
    xmlns:tns="http://ws.das.ubp.edu.ar/" 
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/">
    <wsdl:types>
      <xs:schema elementFormDefault="unqualified" targetNamespace="http://ws.das.ubp.edu.ar/" 
        version="1.0" xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:element name="getList" type="tns:getList"/>
        <xs:element name="getListResponse" type="tns:getListResponse"/>
        <xs:element name="ping" type="tns:ping"/>
        <xs:element name="pingResponse" type="tns:pingResponse"/>
        <xs:complexType name="getList">
          <xs:sequence/>
        </xs:complexType>
        <xs:complexType name="getListResponse">
          <xs:sequence>
            <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="xs:string"/>
          </xs:sequence>
        </xs:complexType>
        <xs:complexType name="ping">
          <xs:sequence/>
        </xs:complexType>
        <xs:complexType name="pingResponse">
          <xs:sequence>
            <xs:element minOccurs="0" name="return" type="xs:string"/>
          </xs:sequence>
        </xs:complexType>
      </xs:schema>
    </wsdl:types>
    <wsdl:message name="pingResponse">
      <wsdl:part name="parameters" element="tns:pingResponse">
      </wsdl:part>
    </wsdl:message>
    <wsdl:message name="getList">
      <wsdl:part name="parameters" element="tns:getList">
      </wsdl:part>
    </wsdl:message>
    <wsdl:message name="getListResponse">
      <wsdl:part name="parameters" element="tns:getListResponse">
      </wsdl:part>
    </wsdl:message>
    <wsdl:message name="ping">
      <wsdl:part name="parameters" element="tns:ping">
      </wsdl:part>
    </wsdl:message>
    <wsdl:portType name="ListWS">
      <wsdl:operation name="getList">
        <wsdl:input name="getList" message="tns:getList">
      </wsdl:input>
        <wsdl:output name="getListResponse" message="tns:getListResponse">
      </wsdl:output>
      </wsdl:operation>
      <wsdl:operation name="ping">
        <wsdl:input name="ping" message="tns:ping">
      </wsdl:input>
        <wsdl:output name="pingResponse" message="tns:pingResponse">
      </wsdl:output>
      </wsdl:operation>
    </wsdl:portType>
    <wsdl:binding name="ListWSServiceSoapBinding" type="tns:ListWS">
      <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
      <wsdl:operation name="getList">
        <soap:operation soapAction="urn:GetList" style="document"/>
        <wsdl:input name="getList">
          <soap:body use="literal"/>
        </wsdl:input>
        <wsdl:output name="getListResponse">
          <soap:body use="literal"/>
        </wsdl:output>
      </wsdl:operation>
      <wsdl:operation name="ping">
        <soap:operation soapAction="urn:Ping" style="document"/>
        <wsdl:input name="ping">
          <soap:body use="literal"/>
        </wsdl:input>
        <wsdl:output name="pingResponse">
          <soap:body use="literal"/>
        </wsdl:output>
      </wsdl:operation>
    </wsdl:binding>
    <wsdl:service name="ListWSService">
      <wsdl:port name="ListWSPort" binding="tns:ListWSServiceSoapBinding">
        <soap:address location="http://DESKTOP-A0IUVM3:8088/mockListWSServiceSoapBinding"/>
      </wsdl:port>
    </wsdl:service>
  </wsdl:definitions>
  
  `

  json = `
  [
    "https://mercadolibre.com.ar",
    "https://infobae.com"
  ]
  `
  

  ngOnInit(): void {

  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
