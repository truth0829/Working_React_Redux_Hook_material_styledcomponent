import React from 'react';
import { Input } from '../Input/styles';
import Select from '../Select/Index';
import ProfileImage from './../../assets/images/setting/profile.png';
import {
  ProfileCardWraper,
  ProfileContent,
  ProConTitle,
  ProImgCircle,
  ProImgWraper,
  Form,
  InputGroup,
  Name,
  NameTitle,
  DRG,
  MultiGroup,
  MultiIn,
  ChoseItem,
  Span,
  Img,
  PhotoButton,
  Delete,
} from './styles';

const ProfileCard = () => {
  return (
    <ProfileCardWraper>
      <ProfileContent>
        <ProImgWraper>
          <ProConTitle>Profile Info</ProConTitle>
          <ProImgCircle>
            <Img src={ProfileImage} alt="profile img" />
            <PhotoButton>Update Photo</PhotoButton>
            <Delete>Delete</Delete>
          </ProImgCircle>
        </ProImgWraper>
        <Form>
          <InputGroup>
            <Name>
              <NameTitle>First Name</NameTitle>
              <Input placeholder="Text Input" />
            </Name>
            <Name>
              <NameTitle>Last Name</NameTitle>
              <Input placeholder="Text Input" />
            </Name>
          </InputGroup>
          <InputGroup>
            <DRG>
              <NameTitle>Date of Birth</NameTitle>
              <Input placeholder="(mm/dd/yyyy)" />
            </DRG>
            <DRG>
              <NameTitle>Race</NameTitle>
              <Input placeholder="Text Input" />
            </DRG>
            <DRG>
              <NameTitle>Gender</NameTitle>
              <Select placeholder="Text Input"></Select>
            </DRG>
          </InputGroup>
          <MultiGroup>
            <NameTitle>Therapist Expertise (enter up to three)</NameTitle>
            <MultiIn>
              <ChoseItem>Anxiety<Span>&times;</Span></ChoseItem>
              <ChoseItem>Depression<Span>&times;</Span></ChoseItem>
            </MultiIn>
          </MultiGroup>
        </Form>
      </ProfileContent>
    </ProfileCardWraper>
  );
};
export default ProfileCard;
