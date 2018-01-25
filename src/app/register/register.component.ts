import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef
} from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {
  passwordisVisible = false;
  @ViewChild("password") password: ElementRef;
  register = {
    fecha_nacimiento: "",
    remember_token: new Date().getTime(),
    password: "",
    email: "",
    fullname: ""
  };

  constructor(
    public renderer: Renderer2,
    public loginService: LoginService,
    public router: Router
  ) {}

  ngOnInit() {}
  changeAttr() {
    this.passwordisVisible = !this.passwordisVisible;

    if (this.passwordisVisible) {
      this.renderer.setAttribute(this.password.nativeElement, "type", "text");
    } else {
      this.renderer.setAttribute(
        this.password.nativeElement,
        "type",
        "password"
      );
    }
  }
  onSubmit() {
    this.loginService.register(this.register).subscribe(
      (res: any) => {
        alert(res.message);
        this.router.navigate(['/login']);
      },
      error => {}
    );
  }
  goLogin() {
    this.router.navigate(["login"]);
  }
}
