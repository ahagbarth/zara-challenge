"use client"
import Button from '@/components/Button';
import Card from '@/components/Card';
import CartItem from '@/components/CartItem/CartItem';
import Color from '@/components/Color';
import Header from '@/components/Header';
import Label from '@/components/Label';
import Search from '@/components/Search';
import SpecificationRow from '@/components/SpecificationRow';
import Storage from '@/components/Storage';

export default function Home() {
  return (
    <div>
      <Header/>
      <Label text="label" />
      <Storage />
      <Color color="#ffee00" />
      <SpecificationRow />
      <Button onClick={() => alert('hello')}/>
      <br />
      <br />
      <Search placeholder='Search for a smartphone...'/>
      <br /> 
      <br /> 
      <br /> 
      <Card />
      <br />
      <br />
      <CartItem/>
    </div>
  );
}
