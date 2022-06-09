package co.edu;

public class Employee {
	//필드. 디폴트로 선언해서 동일한 패키지 내의 다른 패키지 접근 가능.
	private int empId;
	private String lastName;
	private String email;
	private String jobId;
	private String hireDate;
	
	//퍼블릭타입의 겟셋을 이용해서 필드에 값을 넣어주겠다는 메소드. 안넣어주면 not null?값나옴?
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getJobId() {
		return jobId;
	}
	public void setJobId(String jobId) {
		this.jobId = jobId;
	}
	public String getHireDate() {
		return hireDate;
	}
	public void setHireDate(String hireDate) {
		this.hireDate = hireDate;
	}
	
	
}
