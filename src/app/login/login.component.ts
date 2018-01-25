import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef
} from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

interface Login {
  email: String;
  password: String;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  passwordisVisible = false;
  login: Login = {
    email: "",
    password: ""
  };
  user = {
    created_at: null,
    deleted_at: null,
    email: "",
    fecha_nacimiento: "",
    fullname: "",
    id: 0,
    remember_token: null,
    updated_at: null
  };
  @ViewChild("password") password: ElementRef;
  @ViewChild("errorLogin") errorLogin: ElementRef;
  @ViewChild("successLogin") successLogin: ElementRef;

  constructor(
    public router: Router,
    public renderer: Renderer2,
    public loginService: LoginService
  ) {}

  ngOnInit() {
    if (
      localStorage.getItem("user") === "" ||
      localStorage.getItem("user") === undefined ||
      localStorage.getItem("user") === null
    ) {
    } else {
      this.router.navigate(["/dashboard"]);
    }
  }
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
    this.renderer.setStyle(this.errorLogin.nativeElement, "display", "none");
    this.renderer.setStyle(this.successLogin.nativeElement, "display", "none");
    this.loginService.login(this.login.email, this.login.password).subscribe(
      (res: any) => {
        this.renderer.setStyle(
          this.successLogin.nativeElement,
          "display",
          "block"
        );
        this.user = res;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigate(["/dashboard"]);
      },
      error => {
        this.renderer.setStyle(
          this.errorLogin.nativeElement,
          "display",
          "block"
        );
        localStorage.setItem("user", "");
      },
      () => {
        console.log("complete");
      }
    );
  }
  goRegister() {
    this.router.navigate(["register"]);
  }
}
