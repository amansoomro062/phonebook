import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../shared/contact.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  @ViewChild('form') addForm: NgForm;
  
  constructor() { }
  
  editMode: boolean = false;

  contacts : Contact[] = [
    {
      name: 'aman',
      phone: 3152134532
    }
  ];
  selectedContact: Contact;

  ngOnInit(): void {
  }
  onDelete(c: Contact) {
    console.log(c);
    const index: number = this.contacts.indexOf(c);
    if (index !== -1) {
        this.contacts.splice(index, 1);
    }  
  }

  onEdit(c:Contact) {
    this.editMode = true;
    this.selectedContact = c;
    this.addForm.controls['name'].setValue(this.selectedContact.name)
    this.addForm.controls['phone'].setValue(this.selectedContact.phone)
  }

  onSubmit() {
    
    const name = this.addForm.value['name'];
    const phone = this.addForm.value['phone'];

    if(!this.editMode) {
      const c = new Contact();
      c.name = name;
      c.phone = phone;
      this.contacts.push(c);
      this.addForm.reset()
    } else {
      console.log("this will be edit mode");
      this.onDelete(this.selectedContact);
      this.selectedContact.name = name;
      this.selectedContact.phone = phone;
      this.contacts.push(this.selectedContact);
      this.addForm.reset();
      this.editMode = false
    }

  }
}
