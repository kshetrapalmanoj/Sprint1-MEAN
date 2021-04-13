import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { DeveloperService } from "../shared/developer.service";
import { Developer } from "../shared/developer.model";
import { MessageService } from "../message.service";

declare var M: any;

@Component({
  selector: "app-developer",
  templateUrl: "./developer.component.html",
  styleUrls: ["./developer.component.css"],
  providers: [DeveloperService]
})
export class DeveloperComponent implements OnInit {
  constructor(public developerService: DeveloperService,private messageService: MessageService) {}

  ngOnInit() {
    this.resetForm();
    this.refreshDeveloperList();
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.developerService.selectedDeveloper = {
      _id: "",
      name: "",
      email: "",
      office: "",
      salary: null,
    };
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.developerService.postDeveloper(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDeveloperList();
        M.toast({ html: "Saved successfully", classes: "rounded" });
        this.messageService.addMessage('Saved successfully');
      });
    } else {
      this.developerService.putDeveloper(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDeveloperList();
        M.toast({ html: "Updated successfully", classes: "rounded" });
        this.messageService.addMessage('Updated successfully');
      });
    }
  }

  refreshDeveloperList() {
    this.developerService.getDeveloperList().subscribe((res) => {
      this.developerService.developers = res as Developer[];
    });
  }

  onEdit(dev: Developer) {
    this.developerService.selectedDeveloper = dev;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm("Are you sure to delete this record ?") == true) {
      this.developerService.deleteDeveloper(_id).subscribe((res) => {
        this.refreshDeveloperList();
        this.resetForm(form);
        M.toast({ html: "Deleted successfully", classes: "rounded" });
        this.messageService.addMessage('Deleted successfully');
      });
    }
  }
}
