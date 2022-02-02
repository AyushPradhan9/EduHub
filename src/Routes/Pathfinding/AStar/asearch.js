export function asearch(grid, start, target) {
  if (!start || !target || start === target) {
    return false;
  }
  const ol=[];
  ol.push(start);
  const vnio=[];
  vnio.push(start);
  let curr=start;
  curr.distance=0;
  let f=1;
  while (ol.length!=0 && f==1) {
    let nos;
    let td=100;
    if(curr==target)
    {
      break;
    }
    for(let i=0;i<vnio.length;++i)
    {
      if(vnio[i].row==20 && vnio[i].col==48)
      {
        
        let a=grid[vnio[i].row-1][vnio[i].col];
        let c=grid[vnio[i].row][vnio[i].col-1];
        let cha=1;
        let chc=1;
        for(let j=0;j<vnio.length;++j)
        {
          if(vnio[j]==a)
          {
            cha=0;
          }
          if(vnio[j]==c)
          {
            chc=0;
          }
        }
        if(cha==1 && !a.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(a.row-target.row)+Math.abs(a.col-target.col)))))
        {
          nos=a;
          td=vnio[i].distance+1;
        }
        if(chc==1 && !c.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(c.row-target.row)+Math.abs(c.col-target.col)))))
        {
          nos=c;
          td=vnio[i].distance+1;
        }
      }
      else if(vnio[i].row==20 && vnio[i].col==0)
      {
        let a=grid[vnio[i].row-1][vnio[i].col];
        let d=grid[vnio[i].row][vnio[i].col+1];
        let cha=1;
        let chd=1;
        for(let j=0;j<vnio.length;++j)
        {
          if(vnio[j]==a)
          {
            cha=0;
          }
          if(vnio[j]==d)
          {
            chd=0;
          }
        }
        if(cha==1 && !a.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(a.row-target.row)+Math.abs(a.col-target.col)))))
        {
          nos=a;
          td=vnio[i].distance+1;
        }
        if(chd==1 && !d.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(d.row-target.row)+Math.abs(d.col-target.col)))))        {
          nos=d;
          td=vnio[i].distance+1;
        }
      }
      else if(vnio[i].row==0 && vnio[i].col==48)
      {
        let b=grid[vnio[i].row+1][vnio[i].col];
        let c=grid[vnio[i].row][vnio[i].col-1];
        let chb=1;
        let chc=1;
        for(let j=0;j<vnio.length;++j)
        {
          if(vnio[j]==b)
          {
            chb=0;
          }
          if(vnio[j]==c)
          {
            chc=0;
          }
        }
        if(chb==1 && !b.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(b.row-target.row)+Math.abs(b.col-target.col)))))
        {
          nos=b;
          td=vnio[i].distance+1;
        }
        if(chc==1 && !c.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(c.row-target.row)+Math.abs(c.col-target.col)))))
        {
          nos=c;
          td=vnio[i].distance+1;
        }
      }
      else if(vnio[i].row==0 && vnio[i].col==0)
      {
        let b=grid[vnio[i].row+1][vnio[i].col];
        let d=grid[vnio[i].row][vnio[i].col+1];
        let chb=1;
        let chd=1;
        for(let j=0;j<vnio.length;++j)
        {
          if(vnio[j]==b)
          {
            chb=0;
          }
          if(vnio[j]==d)
          {
            chd=0;
          }
        }
        if(chb==1 && !b.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(b.row-target.row)+Math.abs(b.col-target.col)))))
        {
          nos=b;
          td=vnio[i].distance+1;
        }
        if(chd==1 && !d.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(d.row-target.row)+Math.abs(d.col-target.col)))))        {
          nos=d;
          td=vnio[i].distance+1;
        }
      }
      else if(vnio[i].row==20)
      {
        let a=grid[vnio[i].row-1][vnio[i].col];
        let c=grid[vnio[i].row][vnio[i].col-1];
        let d=grid[vnio[i].row][vnio[i].col+1];
        let cha=1;
        let chc=1;
        let chd=1;
        for(let j=0;j<vnio.length;++j)
        {
          if(vnio[j]==a)
          {
            cha=0;
          }
          if(vnio[j]==c)
          {
            chc=0;
          }
          if(vnio[j]==d)
          {
            chd=0;
          }
        }
        if(cha==1 && !a.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(a.row-target.row)+Math.abs(a.col-target.col)))))
        {
          nos=a;
          td=vnio[i].distance+1;
        }
        if(chc==1 && !c.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(c.row-target.row)+Math.abs(c.col-target.col)))))
        {
          nos=c;
          td=vnio[i].distance+1;
        }
        if(chd==1 && !d.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(d.row-target.row)+Math.abs(d.col-target.col)))))        {
          nos=d;
          td=vnio[i].distance+1;
        }
      }
      else if(vnio[i].row==0)
      {
        let b=grid[vnio[i].row+1][vnio[i].col];
        let c=grid[vnio[i].row][vnio[i].col-1];
        let d=grid[vnio[i].row][vnio[i].col+1];
        let chb=1;
        let chc=1;
        let chd=1;
        for(let j=0;j<vnio.length;++j)
        {
          if(vnio[j]==b)
          {
            chb=0;
          }
          if(vnio[j]==c)
          {
            chc=0;
          }
          if(vnio[j]==d)
          {
            chd=0;
          }
        }
        if(chb==1 && !b.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(b.row-target.row)+Math.abs(b.col-target.col)))))
        {
          nos=b;
          td=vnio[i].distance+1;
        }
        if(chc==1 && !c.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(c.row-target.row)+Math.abs(c.col-target.col)))))
        {
          nos=c;
          td=vnio[i].distance+1;
        }
        if(chd==1 && !d.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(d.row-target.row)+Math.abs(d.col-target.col)))))        {
          nos=d;
          td=vnio[i].distance+1;
        }
      }
      else if(vnio[i].col==48)
      {
        
        let a=grid[vnio[i].row-1][vnio[i].col];
        let b=grid[vnio[i].row+1][vnio[i].col];
        let c=grid[vnio[i].row][vnio[i].col-1];
        let cha=1;
        let chb=1;
        let chc=1;
        for(let j=0;j<vnio.length;++j)
        {
          if(vnio[j]==a)
          {
            cha=0;
          }
          if(vnio[j]==b)
          {
            chb=0;
          }
          if(vnio[j]==c)
          {
            chc=0;
          }
        }
        if(cha==1 && !a.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(a.row-target.row)+Math.abs(a.col-target.col)))))
        {
          nos=a;
          td=vnio[i].distance+1;
        }
        if(chb==1 && !b.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(b.row-target.row)+Math.abs(b.col-target.col)))))
        {
          nos=b;
          td=vnio[i].distance+1;
        }
        if(chc==1 && !c.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(c.row-target.row)+Math.abs(c.col-target.col)))))
        {
          nos=c;
          td=vnio[i].distance+1;
        }
      }
      else if(vnio[i].col==0)
      {
        
        let a=grid[vnio[i].row-1][vnio[i].col];
        let b=grid[vnio[i].row+1][vnio[i].col];
        let d=grid[vnio[i].row][vnio[i].col+1];
        let cha=1;
        let chb=1;
        let chd=1;
        for(let j=0;j<vnio.length;++j)
        {
          if(vnio[j]==a)
          {
            cha=0;
          }
          if(vnio[j]==b)
          {
            chb=0;
          }
          if(vnio[j]==d)
          {
            chd=0;
          }
        }
        if(cha==1 && !a.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(a.row-target.row)+Math.abs(a.col-target.col)))))
        {
          nos=a;
          td=vnio[i].distance+1;
        }
        if(chb==1 && !b.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(b.row-target.row)+Math.abs(b.col-target.col)))))
        {
          nos=b;
          td=vnio[i].distance+1;
        }
        if(chd==1 && !d.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(d.row-target.row)+Math.abs(d.col-target.col)))))        {
          nos=d;
          td=vnio[i].distance+1;
        }
      }
      else
      {
        let a=grid[vnio[i].row-1][vnio[i].col];
        let b=grid[vnio[i].row+1][vnio[i].col];
        let c=grid[vnio[i].row][vnio[i].col-1];
        let d=grid[vnio[i].row][vnio[i].col+1];
        let cha=1;
        let chb=1;
        let chc=1;
        let chd=1;
        for(let j=0;j<vnio.length;++j)
        {
          if(vnio[j]==a)
          {
            cha=0;
          }
          if(vnio[j]==b)
          {
            chb=0;
          }
          if(vnio[j]==c)
          {
            chc=0;
          }
          if(vnio[j]==d)
          {
            chd=0;
          }
        }
        if(cha==1 && !a.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(a.row-target.row)+Math.abs(a.col-target.col)))))
        {
          nos=a;
          td=vnio[i].distance+1;
        }
        if(chb==1 && !b.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(b.row-target.row)+Math.abs(b.col-target.col)))))
        {
          nos=b;
          td=vnio[i].distance+1;
        }
        if(chc==1 && !c.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(c.row-target.row)+Math.abs(c.col-target.col)))))
        {
          nos=c;
          td=vnio[i].distance+1;
        }
        if(chd==1 && !d.isWall && ((!nos) || (td+(Math.abs(nos.row-target.row)+Math.abs(nos.col-target.col)))>=(vnio[i].distance+1+(Math.abs(d.row-target.row)+Math.abs(d.col-target.col)))))        {
          nos=d;
          td=vnio[i].distance+1;
        }
      }
    }
    if(!nos)
    {
      break;
    }
    else
    {
      nos.distance=(td);
      curr=nos;
    }
    vnio.push(curr);
  }
  return vnio;
}

export function getNodesInShortestPathOrderA(grid,finishNode) {
  let curr=finishNode;
  const sp=[];
  if(curr.distance==-1)
  {
    return sp;
  }
  while(curr.distance!=0)
  {
    if(curr.row==0 && curr.col==0) {
      let b=grid[curr.row+1][curr.col];
      let d=grid[curr.row][curr.col+1];
      if(!b.isWall && b.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=b;
        continue;
      }
      else if(!d.isWall && d.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=d;
        continue;
      }
    }
    else if(curr.row==0 && curr.col==48) {
      let b=grid[curr.row+1][curr.col];
      let c=grid[curr.row][curr.col-1];
      if(!b.isWall && (b.distance==curr.distance-1))
      {
        sp.push(curr);
        curr=b;
        continue;
      }
      else if(!c.isWall && c.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=c;
        continue;
      }
    }
    else if(curr.row==20 && curr.col==0) {
      let a=grid[curr.row-1][curr.col];
      let d=grid[curr.row][curr.col+1];
      if(!a.isWall && a.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=a;
        continue;
      }
      else if(!d.isWall && d.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=d;
        continue;
      }
    }
    else if(curr.row==20 && curr.col==48) {
      let a=grid[curr.row-1][curr.col];
      let c=grid[curr.row][curr.col-1];
      if(!a.isWall && a.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=a;
        continue;
      }
      else if(!c.isWall && c.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=c;
        continue;
      }
    }
    else if(curr.row==0) {
      let b=grid[curr.row+1][curr.col];
      let d=grid[curr.row][curr.col+1];
      let c=grid[curr.row][curr.col-1];
      if(!b.isWall && b.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=b;
        continue;
      }
      else if(!c.isWall && c.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=c;
        continue;
      }
      else if(!d.isWall && d.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=d;
        continue;
      }
    }
    else if(curr.row==20) {
      let a=grid[curr.row-1][curr.col];
      let c=grid[curr.row][curr.col-1];
      let d=grid[curr.row][curr.col+1];
      if(!a.isWall && a.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=a;
        continue;
      }
      else if(!c.isWall && c.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=c;
        continue;
      }
      else if(!d.isWall && d.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=d;
        continue;
      }
    }
    else if(curr.col==0) {
      let a=grid[curr.row-1][curr.col];
      let b=grid[curr.row+1][curr.col];
      let d=grid[curr.row][curr.col+1];
      if(!a.isWall && a.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=a;
        continue;
      }
      else if(!b.isWall && b.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=b;
        continue;
      }
      else if(!d.isWall && d.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=d;
        continue;
      }
    }
    else if(curr.col==48) {
      let a=grid[curr.row-1][curr.col];
      let b=grid[curr.row+1][curr.col];
      let c=grid[curr.row][curr.col-1];
      if(!a.isWall && a.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=a;
        continue;
      }
      else if(!b.isWall && b.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=b;
        continue;
      }
      else if(!c.isWall && c.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=c;
        continue;
      }
    }
    else {
      let a=grid[curr.row-1][curr.col];
      let b=grid[curr.row+1][curr.col];
      let c=grid[curr.row][curr.col-1];
      let d=grid[curr.row][curr.col+1];
      if(!a.isWall && a.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=a;
        continue;
      }
      else if(!b.isWall && b.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=b;
        continue;
      }
      else if(!c.isWall && c.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=c;
        continue;
      }
      else if(!d.isWall && d.distance==curr.distance-1)
      {
        sp.push(curr);
        curr=d;
        continue;
      }
    }
  }
  sp.push(curr);
  return sp;
}
