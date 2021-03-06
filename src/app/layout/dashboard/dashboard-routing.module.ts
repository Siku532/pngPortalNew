import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from 'src/app/shared/guard';
import { DashboardGuard } from './dashboard.guard';
import { HomeComponent } from './innerComponents/home/home.component';
import { ShopListComponent } from './innerComponents/shop-list/shop-list.component';
import { SummaryComponent } from './innerComponents/summary/summary.component';
import { ProductivityComponent } from './innerComponents/productivity/productivity.component';
import { DetailsComponent } from './innerComponents/details/details.component';
import { DailyVisitReportComponent } from './innerComponents/daily-visit-report/daily-visit-report.component';
import { pathToFileURL } from 'url';
import { ShopDetailComponent } from './innerComponents/shop-detail/shop-detail.component';
import { MslDashboardComponent } from './innerComponents/msl-dashboard/msl-dashboard.component';
import { ProductivityDashboardComponent } from './innerComponents/productivity-dashboard/productivity-dashboard.component';
import { TposmDeploymentReportComponent } from './innerComponents/tposm-deployment-report/tposm-deployment-report.component';
import { UpdatePasswordComponent } from './user/update-password/update-password.component';
import { RawDataComponent } from './raw-data/raw-data.component';
import { DataAvailabilityComponent } from './data-availability/data-availability.component';
import { MerchandiserListComponent } from './innerComponents/merchandiser-list/merchandiser-list.component';
import { AbnormalityComponent } from './innerComponents/abnormality/abnormality.component';
import { TimeAnalysisReportComponent } from './innerComponents/time-analysis-report/time-analysis-report.component';
import { MerchandiserAttendanceComponent } from './innerComponents/merchandiser-attendance/merchandiser-attendance.component';
import { DailyEvaluationReportComponent } from './innerComponents/daily-evaluation-report/daily-evaluation-report.component';
import { EmailManagerComponent } from './innerComponents/email-manager/email-manager.component';
import { UploadRoutesComponent } from './innerComponents/upload-routes/upload-routes.component';
import { SingleRouteDetailComponent } from './innerComponents/upload-routes/routes-inner-pages/single-route-detail/single-route-detail.component';
import { ShopsForSingleRouteComponent } from './innerComponents/upload-routes/routes-inner-pages/shops-for-single-route/shops-for-single-route.component';
import { AddDeviceComponent } from './innerComponents/add-device/add-device.component';
import { SupervisorWwwrSummaryComponent } from './innerComponents/supervisor-wwwr-summary/supervisor-wwwr-summary.component';
import { ShopListReportComponent } from './innerComponents/shop-list-report/shop-list-report.component';
import { MerchandiserRoasterComponent } from './innerComponents/merchandiser-roaster/merchandiser-roaster.component';
import { MerchandiserScoreComponent } from './innerComponents/merchandiser-score/merchandiser-score.component';
import { SkuDashboardTableauComponent } from './Tableau/sku-dashboard-tableau/sku-dashboard-tableau.component';
import { SosDashboardTableauComponent } from './Tableau/sos-dashboard-tableau/sos-dashboard-tableau.component';
import { ProductivityDashboardTableauComponent } from './Tableau/productivity-dashboard-tableau/productivity-dashboard-tableau.component';
import { StfDashboardComponent } from './Tableau/stf-dashboard/stf-dashboard.component';
import { VoErrorReportComponent } from './innerComponents/vo-error-report/vo-error-report.component';
import { MerchandiserWiseScoreComponent } from './innerComponents/merchandiser-wise-score/merchandiser-wise-score.component';
import { SosReportComponent } from './innerComponents/sos-report/sos-report.component';
import { PngOosReportComponent } from './innerComponents/png-oos-report/png-oos-report.component';
import { SurveyShopsSurveyorComponent } from './innerComponents/survey-shops-surveyor/survey-shops-surveyor.component';
import { SurveyShopListComponent } from './innerComponents/survey-shop-list/survey-shop-list.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [DashboardGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'daily_visit_report', component: DailyVisitReportComponent },
            { path: 'oos_details_report', component: DetailsComponent },
            { path: 'shop_list_report', component: ShopListComponent },
            { path: 'summary_report', component: SummaryComponent },
            { path: 'productivity_report', component: ProductivityComponent },
            { path: 'msl_dashboard', component: MslDashboardComponent },
            { path: 'productivity_dashboard', component: ProductivityDashboardComponent },
            { path: 'tposm_deployment_report', component: TposmDeploymentReportComponent },
            { path: 'daily_evaluation_report', component: DailyEvaluationReportComponent },
            { path: 'update_password', component: UpdatePasswordComponent },
            { path: 'raw_data', component: RawDataComponent },
            { path: 'brand_sku_oos', component: DataAvailabilityComponent },
            { path: 'supervisor_wwwr_summary', component: SupervisorWwwrSummaryComponent },
            { path: 'data_abnormality_report', component: AbnormalityComponent },
            { path: 'time-analysis-report', component: TimeAnalysisReportComponent },
            { path: 'shop-list-report', component: ShopListReportComponent },
            { path: 'merchandiser_List', component: MerchandiserListComponent },
            { path: 'merchandiser_attendance', component: MerchandiserAttendanceComponent },
            { path: 'sms_manager', component: EmailManagerComponent },
            { path: 'upload_routes/route_list', component: UploadRoutesComponent },
            { path: 'upload_routes/single_route_details', component: SingleRouteDetailComponent },
            { path: 'upload_routes/shops_for_single_route', component: ShopsForSingleRouteComponent },
            { path: 'add_device', component: AddDeviceComponent },
            { path: 'merchandiser_roster', component: MerchandiserRoasterComponent },
            { path: 'sku-dashboard', component: SkuDashboardTableauComponent },
            { path: 'sos-dashboard', component: SosDashboardTableauComponent },
            { path: 'productivity-tableau', component: ProductivityDashboardTableauComponent },
            { path: 'stf-dashboard', component: StfDashboardComponent },
            { path: 'vo_error_report', component: VoErrorReportComponent},
            { path: 'merchandiser_score', component: MerchandiserScoreComponent },
            { path: 'merchandiser_wise_score', component: MerchandiserWiseScoreComponent },
            { path: 'merchandiser_score/:surveyorId/:startDate/:endDate', component: MerchandiserScoreComponent },
            { path: 'sos-report', component: SosReportComponent },
            { path: 'oos-detail-report', component: PngOosReportComponent },
            { path: 'survey_shop_view', component: SurveyShopsSurveyorComponent },
            { path: 'survey_shop_list', component: SurveyShopListComponent },
            { path: 'survey_shop_list/:surveyorId/:startDate/:endDate', component: SurveyShopListComponent },




        ]
    },
    // { path: 'shop_detail/:id', component: ShopDetailComponent },
    { path: 'shop_detail/:id', component: ShopDetailComponent },

    { path: 'evaluation', loadChildren: './evaluation/evaluation.module#EvaluationModule' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
