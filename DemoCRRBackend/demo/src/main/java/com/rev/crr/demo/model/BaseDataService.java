package com.rev.crr.demo.model;

import java.io.Serializable;
import java.util.Objects;

public class BaseDataService implements Serializable {
  private String tittle;
  private String number;
  private String date;

  public BaseDataService() {
  }

  public BaseDataService(String tittle, String number, String date) {
    this.tittle = tittle;
    this.number = number;
    this.date = date;
  }

  public String getTittle() {
    return tittle;
  }

  public void setTittle(String tittle) {
    this.tittle = tittle;
  }

  public String getNumber() {
    return number;
  }

  public void setNumber(String number) {
    this.number = number;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  @Override
  public String toString() {
    return "BaseDataService{" +
      "tittle='" + tittle + '\'' +
      ", number='" + number + '\'' +
      ", date='" + date + '\'' +
      '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    BaseDataService that = (BaseDataService) o;
    return Objects.equals(getTittle(), that.getTittle()) &&
      Objects.equals(getNumber(), that.getNumber()) &&
      Objects.equals(getDate(), that.getDate());
  }

  @Override
  public int hashCode() {

    return Objects.hash(getTittle(), getNumber(), getDate());
  }
}
