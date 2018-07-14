import { DoctorDashboardModule } from './doctor-dashboard.module';

describe('DoctorDashboardModule', () => {
  let doctorDashboardModule: DoctorDashboardModule;

  beforeEach(() => {
    doctorDashboardModule = new DoctorDashboardModule();
  });

  it('should create an instance', () => {
    expect(doctorDashboardModule).toBeTruthy();
  });
});
