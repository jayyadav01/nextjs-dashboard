'use client'

import DashboardSkeleton from "../../ui/skeletons";

export default function Loading() {
    return (
      <DashboardSkeleton/>
    );
  }

  // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <div className="spinner"></div>
  //       <style jsx>{`
  //         .spinner {
  //           width: 50px;
  //           height: 50px;
  //           border: 5px solid #ccc;
  //           border-top: 5px solid #0070f3;
  //           border-radius: 50%;
  //           animation: spin 1s linear infinite;
  //         }
  
  //         @keyframes spin {
  //           0% {
  //             transform: rotate(0deg);
  //           }
  //           100% {
  //             transform: rotate(360deg);
  //           }
  //         }
  //       `}</style>
  //     </div>
  