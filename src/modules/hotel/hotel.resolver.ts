import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Hotel')
export class HotelResolver {
  private readonly hotels = [
    { id: '1', name: 'Hotel 1', address: 'Address 1', phone: '099 667 336' },
    { id: '2', name: 'Hotel 2', address: 'Address 2', phone: '098 776 543' },
    { id: '3', name: 'Hotel 3', address: 'Address 3', phone: '077 335 774' },
  ];

  @Query('hotels')
  getAllHotels() {
    return this.hotels;
  }

  @Query('hotel')
  getHotelById(@Args('id') id: string) {
    return this.hotels.find((hotel) => hotel.id === id);
  }

  @Mutation('createHotel')
  createHotel(
    @Args('name') name: string,
    @Args('address') address: string,
    @Args('phone') phone: string,
  ) {
    const maxId = Math.max(
      ...this.hotels.map((hotel) => parseInt(hotel.id, 10)),
      0,
    );

    const newHotel = {
      id: (maxId + 1).toString(),
      name,
      address,
      phone,
    };

    this.hotels.push(newHotel);
    return newHotel;
  }

  @Mutation('updateHotel')
  updateHotel(
    @Args('id') id: string,
    @Args('name') name?: string,
    @Args('address') address?: string,
    @Args('phone') phone?: string,
  ) {
    const hotel = this.hotels.find((h) => h.id === id);
    if (!hotel) return null;
    if (name) hotel.name = name;
    if (address) hotel.address = address;
    if (phone) hotel.phone = phone;
    return hotel;
  }

  @Mutation('deleteHotel')
  deleteHotel(@Args('id') id: string) {
    const index = this.hotels.findIndex((hotel) => hotel.id === id);
    if (index === -1) return false;
    this.hotels.splice(index, 1);
    return true;
  }
}
