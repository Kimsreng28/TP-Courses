import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

@Resolver('Booking')
export class BookingResolver {
  private bookings = [
    {
      id: '1',
      start_date: '2023-01-01',
      end_date: '2023-01-05',
      hotel_id: '1',
      is_checked_in: false,
      price: 100,
    },
    {
      id: '2',
      start_date: '2023-01-10',
      end_date: '2023-01-15',
      hotel_id: '2',
      is_checked_in: false,
      price: 200,
    },
  ];
  private idCounter = 1;

  @Mutation('bookHotel')
  bookHotel(
    @Args('start_date') start_date: string,
    @Args('end_date') end_date: string,
    @Args('hotel_id') hotel_id: string,
    @Args('price') price: number,
  ) {
    const newBooking = {
      id: (this.idCounter++).toString(),
      start_date,
      end_date,
      hotel_id,
      is_checked_in: false,
      price,
    };
    this.bookings.push(newBooking);
    return newBooking;
  }

  @Mutation('cancelBooking')
  cancelBooking(@Args('id') id: string): boolean {
    const index = this.bookings.findIndex((b) => b.id === id);
    if (index === -1) return false;
    this.bookings.splice(index, 1);
    return true;
  }

  @Mutation('checkInHotel')
  checkInHotel(@Args('id') id: string) {
    const booking = this.bookings.find((b) => b.id === id);
    if (!booking) return null;
    booking.is_checked_in = true;
    return booking;
  }

  @Query('bookings')
  getBookings(@Args('start') start: string, @Args('end') end: string) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return this.bookings.filter((booking) => {
      const bookingStart = new Date(booking.start_date);
      const bookingEnd = new Date(booking.end_date);
      return bookingStart >= startDate && bookingEnd <= endDate;
    });
  }

  @Query('booking')
  getBookingById(@Args('id') id: string) {
    return this.bookings.find((b) => b.id === id) || null;
  }

  private hotels = [
    { id: '1', name: 'Hotel One', address: '123 Main St' },
    { id: '2', name: 'Hotel Two', address: '456 Elm St' },
    { id: '3', name: 'Hotel Four', address: '789 Oak Ave' },
  ];

  @ResolveField('hotel_id')
  getHotel(@Parent() booking) {
    // booking.hotel_id is a string (hotel id)
    return this.hotels.find((hotel) => hotel.id === booking.hotel_id);
  }
}
