import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoices') // שם הטבלה
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number; // מזהה ייחודי לחשבונית

  @Column()
  customer: string; // שם הלקוח

  @Column()
  amount: number; // סכום החשבונית

  @Column()
  status: string; // סטטוס החשבונית (e.g., Paid, Pending, Overdue)

  @Column({ type: 'date' })
  dueDate: Date; // תאריך יעד

  @Column({ type: 'date', nullable: true })
  paymentDate: Date; // תאריך תשלום (אם קיים)
}
