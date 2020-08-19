import { EntityRepository, Repository } from 'typeorm'; // o Repository é o que importa os métodos
// o EntityRepository ta exportando os models

import Appointment from '../models/Appointments';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    // Sempre que for uma função asyncrona tem que passar o Promise

    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
